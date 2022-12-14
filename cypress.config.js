const { defineConfig } = require('cypress')
module.exports = defineConfig({
  projectId: 'ai7vod',
  e2e: {
    baseUrl: 'https://front-recette3.partenaire-epargne.apicil.com',
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
     experimentalSessionAndOrigin: true ,
    force: true,
  },
})