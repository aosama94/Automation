module.exports = {
  elements: {
    lessonPage: {
      selector: '.lesson-landing-page',
    },
    worksheet: {
      selector: 'li:nth-of-type(7) > div > a',
    },
  },
  commands: [{
    openWorkSheet() {
      this
        .waitForElementVisible('@lessonPage', 'Lesson page is exist')
        .click('@worksheet');
    },
  }],
};
