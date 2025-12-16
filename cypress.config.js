const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Cypress Test Results',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,cy.js}",
    supportFile: "cypress/support/e2e.js",
    experimentalInteractiveRunEvents: true,
    baseUrl: 'https://www.troostwijkauctions.com/en',
    experimentalSessionAndOrigin: true,
    // Timeout configurations
    defaultCommandTimeout: 4000,      // Time to wait for cy.get() and assertions
    pageLoadTimeout: 60000,          // Time to wait for page loads
    // Screenshots and videos
    screenshotOnRunFailure: true,
    screenshotsFolder: 'cypress/reports/html/screenshots',
    video: true,
    videosFolder: 'cypress/reports/html/videos',
    // Page paths configuration
    pageUrls: {
      base: '',
      auctions: '/auctions'
    }
  },
});
