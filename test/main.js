/**
 * This is entry-point for testing with karma-runner and requirejs
 */
(function() {

  var specFiles = null;
  var baseUrl = '';
  var requirejsCallback = null;
  var pkgs = {};

  // if invoked in karma-runner environment
  if (typeof window !== 'undefined' && window.__karma__ !== undefined) {
    baseUrl = '/base/test';
    requirejsCallback = window.__karma__.start;

    // looking for *spec.js files
    specFiles = [];
    for (var file in window.__karma__.files) {
      if ((/spec\.js$/i).test(file)) {
        specFiles.push(file);
      } else {
        pkgs[file] = file;
        // HACK: allow requirejs to load modules using path without .js extension
        var js = /\.js$/i;
        if (js.test(file)) {
          pkgs[file.replace(js, '')] = file;
        }
      }
    }
  }

  requirejs.config({
      baseUrl: baseUrl,
      pkgs: pkgs,
      paths: {},
      // ask Require.js to load these files (all our tests)
      deps: specFiles,
      // start test run, once Require.js is done
      callback: requirejsCallback
  });
})();
