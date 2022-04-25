module.exports = {
  elements: {
    questionsPage: {
      selector: '.worksheet-preview-page',
    },
    questionsNumber: {
      selector: '.instance',
    },
  },
  commands: [{
    countQuestions() {
      this
        .waitForElementVisible('@questionsPage', 'Lesson page is exist')
        .findElements('@questionsNumber', (result) => {
          console.log(`Number of displayed questions is : ${result.value.length} Questions`);
        });
    },
  }],
};
