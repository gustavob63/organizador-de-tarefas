# Entrega II — Organizador de Tarefas (containerizado + CI)

Arquivo gerado automaticamente a partir do zip da Entrega I que você enviou.

## O que tem aqui
- Dockerfile
- docker-compose.yml
- scripts/build-extension.mjs  (gera dist/ + dist/extension.zip)
- tests/ (playwright.config.ts + extension.spec.ts)
- .github/workflows/ci.yml
- package.json (se não existia, foi criado um simples)
- manifest.json, src/, icons/  (copiados da sua extensão original quando presentes)

## Como rodar localmente (recomendo usar Node 20 e Docker)
1. Instale dependências locais (opcional, se for rodar via Docker):
   ```bash
   npm ci
   npx playwright install --with-deps chromium
   npm run build
   npm run test:e2e
   ```
2. Para rodar via Docker Compose (recomendado para simular CI):
   ```bash
   docker compose build
   docker compose run --rm e2e
   ```
3. Relatório do Playwright é gerado em `playwright-report/` (após testes com reporter html).
4. O pacote final da extensão fica em `dist/extension.zip` (ou no artifact do CI).

## Como entregar no GitHub (passos finais)
- Crie um repositório público e envie TODOS os arquivos desse diretório.
- Garanta que o workflow esteja em `.github/workflows/ci.yml` (já incluído).
- Faça commit e push para a branch `main` (ou abra PR para `main`).
- No GitHub Actions, verifique a execução do workflow: artefatos `playwright-report` e `extension-zip` devem aparecer.
- Capture a tela do relatório do Playwright e anexe se solicitado pelo professor.

## Observações
- Ajuste os testes em `tests/extension.spec.ts` para validar elementos específicos da sua extensão (popup, content script, etc.).
- Se sua extensão usa páginas de opções ou URLs internas, considere expor rotas para testes mais determinísticos.
