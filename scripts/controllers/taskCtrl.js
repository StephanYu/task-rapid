'use strict';

app.controller('TaskController', function($scope, $firebase, FURL, $location, $routeParams, toaster) {
  var ref = new Firebase(FURL);
  var fbTasks = $firebase(ref.child('tasks')).$asArray();
  var taskId = $routeParams.taskId;

  if (taskId) {
    $scope.selectedTask = getTask(taskId);
  }

  function getTask(taskId) {
    return $firebase(ref.child('tasks').child(taskId)).$asObject();
  }

  $scope.updateTask = function(task) {
    $scope.selectedTask.$save(task);
    toaster.pop('success', 'Task updated successfully.');
    $location.path('/browse');
  }
  
  $scope.tasks = fbTasks;

  $scope.postTask = function(task) {
    fbTasks.$add(task);
    toaster.pop('success', 'Task created successfully.');
    $location.path('/browse');
  }
});