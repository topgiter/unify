'use strict';

/**
 * @ngdoc overview
 * @name unifyApp
 * @description
 * # unifyApp
 *
 * Main module of the application.
 */
var unifyApp = 
angular
  .module('unifyApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'kendo.directives'
  ])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(false);
    
    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'content/home/main.html',
        controller: 'HomeCtrl'
      })
      .state('loggedin', {
        url: '/main',
        templateUrl: 'content/loggedin/main.html',
        controller: 'LoggedInCtrl'
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
      })
      .state('about_gsp', {
        url: '/about_gsp',
        templateUrl: 'content/about_gsp/main.html'
      })
      .state('about_coppa', {
        url: '/about_coppa',
        templateUrl: 'content/about_coppa/main.html'
      })
      .state('about_copyrights', {
        url: '/about_copyrights',
        templateUrl: 'content/about_copyrights/main.html'
      })
      .state('about_privacy', {
        url: '/about_privacy',
        templateUrl: 'content/about_privacy/main.html'
      })
      .state('about_terms', {
        url: '/about_terms',
        templateUrl: 'content/about_terms/main.html'
      })
      .state('profile', {
        url: '/profile',
        templateUrl: 'content/profile/main.html'
      });
       
  });
