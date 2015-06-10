// Karma configuration
// Generated on Thu Jun 04 2015 11:03:00 GMT+0200 (Central European Daylight Time)

module.exports = function(config) {
  config.set({
    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'requirejs'],


    // list of files / patterns to load in the browser
    files: [
      {pattern: 'src/**/*.ts', included: false},
      {pattern: 'test/**/*.ts', included: false},
      'test/main.js',
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        '**/*.ts': ['typescript']
    },

    typescriptPreprocessor: {
      options: {
        module: 'amd',
        target: 'es5'
      },
      typings: [
        'typings/**/*.d.ts'
      ],
    },

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

    plugins: [
      'karma-requirejs',
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-typescript-preprocessor'
    ],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  });
};
