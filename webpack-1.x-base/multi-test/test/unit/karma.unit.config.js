var base = require('./karma.base.config.js')

module.exports = function (config) {
  config.set(Object.assign(base, {

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: [
      'PhantomJS'
    ],

    reporters: ['spec', 'coverage'],

    plugins: base.plugins.concat([
      'karma-phantomjs-launcher',
      'karma-spec-reporter'
    ]),

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,
    
    colors: true,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO

  }))
}
