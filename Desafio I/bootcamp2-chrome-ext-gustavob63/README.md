# 🗂️ Organizador de Tarefas (Chrome Extension - MV3)

Extensão para Google Chrome que permite criar, marcar e remover tarefas diretamente do navegador. Desenvolvida com Manifest V3.

---

## ✨ Funcionalidades

- ✅ Adicione, marque como concluída e exclua tarefas.
- 🔄 Armazenamento local com persistência entre sessões.
- ⚙️ Página de opções para:
  - Limpar todas as tarefas salvas.
  - Personalizar cor do destaque (opcional).
- 🧠 Interface simples e responsiva.
- 🛠️ Desenvolvida com HTML, CSS, JavaScript e Chrome APIs.

---

## 📦 Estrutura do Projeto
```
src/
popup/
popup.html
popup.js
popup.css
options/
options.html
options.js
background/
service-worker.js
assets/
logo.png
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


---

## 🧪 Como instalar no Chrome (modo desenvolvedor)

1. Acesse `chrome://extensions`
2. Ative o **Modo do desenvolvedor** (Developer Mode).
3. Clique em **"Carregar sem compactação"** (Load unpacked).
4. Selecione a pasta raiz do projeto (onde está o `manifest.json`).
5. A extensão aparecerá na barra de ferramentas.

---

## ⚙️ Permissões utilizadas

- `storage` — Salvar tarefas e configurações localmente.
- `host_permissions` — (opcional) Apenas necessário se o content script for usado.

---

## 🚀 Como usar

- Clique no ícone da extensão para abrir o popup.
- Digite uma tarefa e clique em **"Adicionar"**.
- Marque tarefas como concluídas ou clique em ❌ para removê-las.
- Vá em **⚙️ Opções** para:
  - Personalizar a cor do destaque.
  - Ativar/desativar o destaque.
  - Limpar todas as tarefas.

---

## 🧼 Limpar tudo

Na tela de opções, clique em **"🧹 Limpar todas as tarefas"** para apagar tudo o que foi salvo.

---

## 🪪 Licença

MIT © [Gustavo Barbosa Oliveira]
