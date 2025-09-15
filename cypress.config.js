const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://per5.com.br',
    // Adaptado para rodar em visualização padrão 1280x800
    viewportWidth: 1280,
    viewportHeight: 800,
    video: false,
  },
   watchForFileChanges: true
});
