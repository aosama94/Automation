module.exports = {
  src_folders: ['tests'],
  custom_commands_path: ['commands'],
  page_objects_path: ['pages'],
  output_folder: 'html-reports',
  waitForConditionTimeout: 20000,
  //  "globals_path": "globals.js",

  webdriver: {
    start_process: true,
    server_path: 'node_modules/.bin/chromedriver',
    port: 9515,
  },

  test_settings: {
    default: {
      globals: {
        waitForConditionTimeout: 20000,
        waitForConditionPollInterval: 500,
      },
      desiredCapabilities: {
        browserName: 'chrome',
      },
    },
  },
};
