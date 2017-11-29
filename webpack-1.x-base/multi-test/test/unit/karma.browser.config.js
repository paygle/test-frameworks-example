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
      'ChromeDebugging'
    ],
    // 配置 Chrome 调试参数
    customLaunchers: {
      ChromeDebugging: {
        base: 'Chrome',
        flags: [ '--remote-debugging-port=9333' ]
      }
    },

    reporters: ['mocha'],

    plugins: base.plugins.concat([
      'karma-chrome-launcher'
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
