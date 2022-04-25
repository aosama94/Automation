				                       	Test Automation framework
1- installation 
   * add node modules: >npm init
   * install nightwatch >npm inistall nightwatch
   * install eslint --> npm install eslint 
   * update .env.example and rename it (.env) and add our environment 
   * update chrome driver if needed --> npm install chromedriver@versionNumber
   
2- how to run 
   * add script name to package.json file 
   * npm test : to run all files.js 
   * npm run (script name) : to run with tag name 
   
3- folders stracture
   * command
     -pre condition used befor test case
   * Pages 
     -each page have element 
     -each element have separate function
   * tests
     - each test file linked with page file 
     - for example registerTest inherit from registerPage
