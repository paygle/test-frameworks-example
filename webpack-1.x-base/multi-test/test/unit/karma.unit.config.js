var base = require('./karma.base.config.js')

module.exports = function (config) {
  config.set(Object.assign(base, {
    browsers: ['PhantomJS', 'Chrome'],
    reporters: ['mocha'],
    singleRun: true,
    plugins: base.plugins.concat([
      'karma-phantomjs-launcher',
      'karma-chrome-launcher'
    ])
  }))
}
