const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

chrome.storage.local.get(["tasks"], (result) => {
  if (result.tasks) {
    result.tasks.forEach(addTaskToUI);
  }
});

addTaskBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addTask();
});

function addTask() {
  const text = taskInput.value.trim();
  if (!text) return;

  const task = { text, completed: false };
  addTaskToUI(task);
  saveTask(task);

  taskInput.value = "";
}

function addTaskToUI(task) {
  const li = document.createElement("li");
  li.textContent = task.text;

  if (task.completed) li.classList.add("completed");

  li.addEventListener("click", () => {
    li.classList.toggle("completed");
    updateStorage();
  });

  const delBtn = document.createElement("button");
  delBtn.textContent = "x";
  delBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    li.remove();
    updateStorage();
  });

  li.appendChild(delBtn);
  taskList.appendChild(li);
}

function saveTask(task) {
  chrome.storage.local.get(["tasks"], (result) => {
    const tasks = result.tasks || [];
    tasks.push(task);
    chrome.storage.local.set({ tasks });
  });
}

function updateStorage() {
  const tasks = [];
  taskList.querySelectorAll("li").forEach((li) => {
    tasks.push({
      text: li.firstChild.textContent,
      completed: li.classList.contains("completed"),
    });
  });
  chrome.storage.local.set({ tasks });
}
