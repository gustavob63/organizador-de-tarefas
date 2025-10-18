# Usa a imagem oficial do Playwright
FROM mcr.microsoft.com/playwright:v1.46.0-jammy

# Cria o diretório de trabalho
WORKDIR /app

# Copia arquivos de dependências
COPY package*.json ./

# Instala dependências
RUN npm ci

# Copia o restante do código
COPY . .

# Comando padrão ao rodar o container
CMD ["npx", "playwright", "test", "--reporter=list,html"]
