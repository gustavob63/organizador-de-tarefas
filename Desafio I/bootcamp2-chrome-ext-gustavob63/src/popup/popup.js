const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

function loadTasks() {
  chrome.storage.local.get(['tasks'], (result) => {
    const tasks = result.tasks || [];
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
      const li = document.createElement('li');

      const taskContent = document.createElement('div');
      taskContent.className = 'task-content';

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = task.done;
      checkbox.addEventListener('change', () => {
        task.done = checkbox.checked;
        tasks[index] = task;
        chrome.storage.local.set({ tasks });
        loadTasks();
      });

      const textSpan = document.createElement('span');
      textSpan.textContent = task.text;
      if (task.done) {
        textSpan.classList.add('done');
      }

      const removeBtn = document.createElement('button');
      removeBtn.textContent = '❌';
      removeBtn.className = 'remove-btn';
      removeBtn.addEventListener('click', () => {
        removeTask(index);
      });

      taskContent.appendChild(checkbox);
      taskContent.appendChild(textSpan);
      taskContent.appendChild(removeBtn);

      const timeSpan = document.createElement('small');
      timeSpan.className = 'created-at';
      timeSpan.textContent = `🕒 ${task.createdAt}`;

      li.appendChild(taskContent);
      li.appendChild(timeSpan);
      taskList.appendChild(li);
    });
  });
}

addTaskButton.addEventListener('click', () => {
  const text = taskInput.value.trim();
  if (text) {
    const newTask = {
      text,
      done: false,
      createdAt: new Date().toLocaleString("pt-BR")
    };

    chrome.storage.local.get(['tasks'], (result) => {
      const tasks = result.tasks || [];
      tasks.push(newTask);
      chrome.storage.local.set({ tasks }, () => {
        taskInput.value = '';
        loadTasks();
      });
    });
  }
});

taskInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    addTaskButton.click();
  }
});

function removeTask(index) {
  chrome.storage.local.get(['tasks'], (result) => {
    const tasks = result.tasks || [];
    tasks.splice(index, 1);
    chrome.storage.local.set({ tasks }, () => {
      loadTasks();
    });
  });
}

document.addEventListener('DOMContentLoaded', loadTasks);
