# Bootcamp Helper (MV3)

Extensão de exemplo para Google Chrome (Manifest V3) usada no Bootcamp II.

## ✨ Funcionalidades
- Popup com UI simples (HTML/CSS/JS).
- Service worker em background respondendo a mensagens (PING).
- Content script (opcional) que destaca links em páginas específicas.
- Página de opções para ajustar cor e ativar/desativar o destaque.
- Permissão mínima: `storage`.

## 🗂 Estrutura
```
src/
  popup/
    popup.html
    popup.js
    popup.css
  content/
    content.js
  background/
    service-worker.js
  options/
    options.html
    options.js
  assets/
    logo.svg
  styles/
    global.css
icons/
  icon16.png
  icon32.png
  icon48.png
  icon128.png
docs/
  index.html         ← GitHub Pages (Settings → Pages → /docs)
manifest.json
README.md
LICENSE
```

## 🔧 Instalação local (modo desenvolvedor)
1. Abra `chrome://extensions` e ative **Developer mode**.
2. Clique em **Load unpacked** e selecione a pasta do projeto.
3. Clique no ícone da extensão para abrir o popup.
4. Acesse `https://developer.chrome.com/` para ver os links destacados pelo content script.

## 🔐 Permissões
- `storage` — salvar preferências no `chrome.storage.sync`.

> **Princípio do menor privilégio:** sem `tabs` e sem `host_permissions` amplas. O `content_script` é limitado a `https://developer.chrome.com/*`.

## 🌐 GitHub Pages
- (Opção A recomendada) Em **Settings → Pages**, selecione **Branch: main** e **Folder: /docs**.
- A página será publicada em `https://<usuario>.github.io/<repo>/`.

## 📦 Empacotar (.zip) para distribuição
1. Comprima a pasta do projeto (sem `node_modules`).
2. No GitHub, crie uma **Release** e envie o `.zip`.
3. Adicione o link de download no `README.md` e/ou no `docs/index.html`.

## 🧪 Testes rápidos
- Verifique o console do popup e do `service-worker` (DevTools) para logs.
- Troque a cor/ativação nas **Opções** e recarregue a página alvo.

## 🪪 Licença
[MIT](LICENSE)
