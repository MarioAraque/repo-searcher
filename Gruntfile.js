module.exports = function (grunt) {
  'use strict';
  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: 9000,
          hostname: 'localhost',
          keepalive: true,
          open: true,
          useAvailablePort: true
        }
      }
    },

    phantomcss: {
      options: {
        mismatchTolerance: 0.05,
        screenshots: 'baselines',
        results: 'results',
        viewportSize: [1280, 800],
      },
      src: [
        'test/tests.js'
      ]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-phantomcss');

  grunt.registerTask('default', ['connect']);
};

