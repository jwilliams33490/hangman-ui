'use strict';

/**
 * @ngdoc overview
 * @name hmappApp
 * @description
 * # hmappApp
 *
 * Main module of the application.
 */
angular
  .module('hmappApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider,$locationProvider) {
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
      .when('/hangman', {
        templateUrl: 'views/hangman.html',
        controller: 'HangmanCtrl',
        controllerAs: 'hangman'
      })
      .otherwise({
        redirectTo: '/about'
      });

  
    $locationProvider.hashPrefix('');

  });
