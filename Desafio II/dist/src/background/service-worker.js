chrome.runtime.onInstalled.addListener(() => {
  console.log("Organizador de Tarefas instalado.");
  chrome.storage.local.set({ tasks: [] });
});
