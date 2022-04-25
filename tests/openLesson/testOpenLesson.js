module.exports = {
  '@tags': ['openLesson'],
  'Open Lesson': function (browser) {
    const home = browser.page.openLesson.homePage();
    const results = browser.page.openLesson.resultsPage();
    const chosenLesson = browser.page.openLesson.lessonPage();
    const questions = browser.page.openLesson.questionsPage();

    home
      .navigate()
      .searchLesson(browser);
    results
      .chooseLesson();
    chosenLesson
      .openWorkSheet();
    questions
      .countQuestions();
  },
};
