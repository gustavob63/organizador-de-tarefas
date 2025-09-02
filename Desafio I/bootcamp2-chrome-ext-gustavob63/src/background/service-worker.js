// src/background/service-worker.js
// Executa em background (MV3 Service Worker)
chrome.runtime.onInstalled.addListener(async (details) => {
  console.log('Bootcamp Helper instalado.', details);
  const defaults = { installs: Date.now(), highlightColor: '#ec0089', highlightEnabled: true };
  chrome.storage.sync.set(defaults);
});

// Listener simples para o popup
chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg && msg.type === 'PING') {
    sendResponse({ ok: true, time: new Date().toISOString() });
    return true; // indica resposta síncrona
  }
});
