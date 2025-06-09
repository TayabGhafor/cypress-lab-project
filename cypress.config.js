const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '7x8nv1',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
