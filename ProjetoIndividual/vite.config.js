import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: resolve(__dirname, 'src'), // Diretório raiz do projeto
  build: {
    outDir: resolve(__dirname, 'dist'), // Diretório de saída do build
    emptyOutDir: true, // Limpa o diretório de saída antes de cada build
  },
  server: {
    port: 8080, // Porta do servidor de desenvolvimento
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/scss/main.scss";`, // Importa SCSS globalmente
      },
    },
  },
});
