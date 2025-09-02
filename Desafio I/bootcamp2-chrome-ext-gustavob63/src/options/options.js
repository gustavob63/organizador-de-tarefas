document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form');
  const color = document.getElementById('highlightColor');
  const enabled = document.getElementById('highlightEnabled');
  const msg = document.getElementById('msg');
  const clearBtn = document.getElementById("clear");

  async function restore() {
    try {
      const data = await chrome.storage.sync.get({
        highlightColor: '#ec0089',
        highlightEnabled: true,
      });
      color.value = data.highlightColor;
      enabled.checked = !!data.highlightEnabled;
    } catch (error) {
      console.error('Erro ao restaurar configurações:', error);
    }
  }
  restore();

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    try {
      await chrome.storage.sync.set({
        highlightColor: color.value,
        highlightEnabled: enabled.checked,
      });
      msg.textContent = 'Preferências salvas ✓';
    } catch (error) {
      msg.textContent = 'Erro ao salvar preferências.';
      console.error(error);
    }
    setTimeout(() => (msg.textContent = ''), 1500);
  });

  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      if (confirm("Tem certeza que deseja apagar todas as tarefas?")) {
        chrome.storage.local.set({ tasks: [] }, () => {
          alert("Todas as tarefas foram apagadas.");
        });
      }
    });
  }
});
