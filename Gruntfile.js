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
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default', ['connect']);
};

