module.exports = {
  elements: {
    searchResults: {
      locateStrategy: 'xpath',
      selector: '//h1[contains(text(),"results")]',
    },
    chosenLesson: {
      selector: 'li:nth-of-type(2) > .right > a',
    },
  },
  commands: [{
    chooseLesson() {
      this
        .waitForElementVisible('@searchResults', 'Results page is exist')
        .click('@chosenLesson');
    },
  }],
};
