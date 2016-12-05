'use strict';

var JOB_NAME = 'Flake';

console.log('SAUCE', process.env.SAUCE_USERNAME)

exports.config = {
  specs: [
    '../flakey-test.js',
    '../passing-test.js'
  ],

  capabilities: {
    browserName: 'firefox',
    name: JOB_NAME
  },

  sauceUser: process.env.SAUCE_USERNAME,
  sauceKey: process.env.SAUCE_ACCESS_KEY,

  baseUrl: 'http://localhost:3000/',

  framework: 'jasmine',

  allScriptsTimeout: 10000,

  getPageTimeout: 3000,

  jasmineNodeOpts: {
    defaultTimeoutInterval: 5000
  },

  onPrepare: function () {
    // let protractor know it doesn't need to look for angular on the page
    browser.ignoreSynchronization = true;
  }
};

