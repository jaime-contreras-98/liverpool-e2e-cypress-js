const { defineConfig } = require("cypress");
require("dotenv").config()

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://todoist.com/",
    setupNodeEvents(on, config) {
    },
    env: {
      loginUser: process.env.POS_USER,
      loginPass: process.env.POS_PASS
    }
  },
});
