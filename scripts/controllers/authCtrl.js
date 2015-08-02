'use strict';

app.controller('AuthController', function($scope, $location, AuthFactory, toaster) {
  
  if (AuthFactory.signedIn()) {
    $location.path('/');
  }
  
  $scope.register = function(user) {
    AuthFactory.register(user).then(function() {
      toaster.pop('success', 'Registration successful.');
      $location.path('/');
    }, function(error) {
      toaster.pop('error', 'Oops! Something went wrong.');
    });
  };

  $scope.login = function(user) {
    AuthFactory.login(user).then(function() {
      toaster.pop('success', 'Login successful.');
      $location.path('/');
    }, function(error) {
      toaster.pop('error', 'Oops! Something went wrong.');
    });
  };

  $scope.changesPassword = function(user) {
    AuthFactory.changesPassword(user).then(function() {
      //Reset form
      $scope.user.email = '';
      $scope.user.oldPass = '';
      $scope.user.newPass = '';

      toaster.pop('success', 'Password changed successfully!');
    }, function(error) {
      toaster.pop('error', 'Oops! Something went wrong.');
    });
  };

});