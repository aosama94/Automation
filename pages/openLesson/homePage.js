const testData = require(`./../../testData-${process.env.environment}`);

module.exports = {
  url: process.env.URL,

  elements: {
    pagesBody: {
      selector: 'body',
    },
    languageBtn: {
      selector: '.user-actions ul:nth-child(1) > li:nth-child(3) span',
    },
    engLanguage: {
      selector: '.user-actions > ul  .dropdown-menu.languages > li:nth-of-type(1) > a',
    },
    searchBtn: {
      selector: 'button[type="button"] > .f-icon.search-icon',
    },
    searchArea: {
      selector: '#txt_search_query',
    },
  },
  commands: [{
    searchLesson(browser) {
      this
        .waitForElementVisible('@pagesBody', 'Home page is exist')
        .click('@languageBtn')
        .waitForElementVisible('@engLanguage', 'English language page is exist')
        .click('@engLanguage')
        .click('@searchBtn')
        .setValue('@searchArea', [testData.chosenLesson, browser.Keys.ENTER]);
    },
  }],
};
