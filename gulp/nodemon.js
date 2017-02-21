/*
  nodemon.js
  ===========
  uses nodemon to run a server, watches for javascript and json changes
*/

var fs = require('fs')
var path = require('path')
var gulp = require('gulp')
var nodemon = require('gulp-nodemon')
var config = require('./config.json')

gulp.task('server', function () {
  nodemon(
    {
      script: 'server.js',
      ext: '*'
    }
  );
});
