const { defineConfig } = require('cypress')

module.exports = defineConfig({

  viewportWidth: 1200,
  viewportHeight: 600,

  e2e: {
    // Configure your E2E tests here
    reporter: 'cypress-mochawesome-reporter',
    chromeWebSecurity: false,
    reporterOptions: {
      reportDir: 'cypress/Reports',
      embeddedScreenshots: true,
      charts: true,
    },
  },
})