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
      .state('sign_up', {
        url: '/sign_up',
        templateUrl: 'content/sign_up/main.html'
      })
      .state('forgot_password', {
        url: '/forgot_password',
        templateUrl: 'content/forgot_password/main.html'
      })
      .state('password_reset', {
        url: '/password_reset',
        templateUrl: 'content/password_reset/main.html'
      })
      .state('write_poem', {
        url: '/write_poem',
        templateUrl: 'content/write_poem/main.html'
      });
      
  });
