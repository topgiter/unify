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
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/route', {
        templateUrl: 'views/route.html',
        controller: 'RouteCtrl',
        controllerAs: 'route'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
