'use strict';

/**
 * @ngdoc overview
 * @name asafApp
 * @description
 * # asafApp
 *
 * Main module of the application.
 */
angular
  .module('asafApp', [
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
        .when('/anomaly', {
            templateUrl: 'views/anomaly.html',
            controller: 'AnomalyCtrl',
            controllerAs: 'anomaly'
        })
        .otherwise({
        redirectTo: '/'
        });
  });
