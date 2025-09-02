// src/content/content.js
// Destaca links na página alvo com base nas preferências salvas.

(async function () {
  try {
    const { highlightColor = '#ec0089', highlightEnabled = true } = await chrome.storage.sync.get({
      highlightColor: '#ec0089', highlightEnabled: true
    });

    if (!highlightEnabled) return;

    const links = document.querySelectorAll('a[href]');
    for (const a of links) {
      a.style.outline = `2px solid ${highlightColor}`;
      a.style.outlineOffset = '2px';
    }
  } catch (e) {
    // Sem acesso ao storage? (ex.: permissões alteradas)
    console.warn('Conteúdo: não foi possível ler storage', e);
  }
})();
