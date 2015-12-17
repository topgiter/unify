'use strict';

/**
 * @ngdoc overview
 * @name unifyApp
 * @description
 * # unifyApp
 *
 * Main module of the application.
 */
angular
  .module('unifyApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'content/home/main.html',
      })
      .state('about', {
        url: '/about',
        templateUrl: 'content/home/about.html'
      })
      .state('sign_in', {
        url: '/sign_in',
        templateUrl: 'content/sign_in/main.html'
      })
      .state('forget', {
        url: '/forget_password',
        templateUrl: 'content/forget/main.html'
      })
      
  });
