/**
 * Run script for Grunt, task runner
 *
 * The MIT License (MIT)
 * Copyright (c) 2015 GochoMugo <mugo@forfuture.co.ke>
 */


"use strict";


exports = module.exports = function(grunt) {
  require("load-grunt-tasks")(grunt);

  grunt.initConfig({
    eslint: {
      src: ["Gruntfile.js", "src/**/*.js"],
      test: ["test/**/*.js"],
    },
    mochaTest: {
      test: {
        options: {
          reporter: "spec",
          quiet: false,
          clearRequireCache: false,
        },
        src: ["ctest/**/test.*.js"],
      },
    },
  });

  grunt.registerTask("test", ["eslint", "mochaTest"]);
};
