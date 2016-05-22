'use strict';

module.exports = {

  'serverport': 3000,

  'scripts': {
    'src': './src/**/*.js',
    'dest': './build/js/'
  },

  'images': {
    'src': './assets/images/**/*.{jpeg,jpg,png}',
    'dest': './build/images/'
  },

  'svg': {
    'src': './assets/images/**/*.svg',
    'dest': './build/images/'
  },

  'styles': {
    'compileFile': './assets/styles/**/main.scss',
    'src': './app/styles/**/*.scss',
    'dest': './build/css/'
  },

  'sourceDir': './src/',

  'buildDir': './build/'

};
