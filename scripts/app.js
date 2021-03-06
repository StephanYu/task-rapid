'use strict';

var app = angular
  .module('TaskRapid', [
    'ngAnimate',
    'ngResource',    
    'ngRoute',    
    'firebase',
    'toaster'
  ])
  .constant('FURL', 'https://task-rapid.firebaseio.com/')  
  .config(function ($routeProvider) {
    $routeProvider      
      .when('/', {
        templateUrl: 'views/browse.html'        
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'AuthController'        
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'AuthController'        
      })
      .when('/browse', {
        templateUrl: 'views/browse.html',
        controller: 'TaskController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
