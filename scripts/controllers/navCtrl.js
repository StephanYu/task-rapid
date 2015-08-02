'use strict';

app.controller('NavController', function($scope, $location, AuthFactory, toaster) {

  $scope.currentUser = AuthFactory.user;
  $scope.signedIn = AuthFactory.signedIn;

  $scope.logout = function() {
    AuthFactory.logout();
    toaster.pop('success', 'Logout successful.');
    $location.path('/');
  };
});