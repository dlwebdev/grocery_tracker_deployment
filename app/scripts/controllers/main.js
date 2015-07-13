'use strict';

angular.module('angularGroceryTrackerApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
    $scope.addToDo = function() {
    	$scope.todos.push($scope.todo);
    	$scope.todo = '';
    };
    
    $scope.removeToDo = function(index) {
    	$scope.todos.splice(index, 1);
    };
    
    $scope.todos = [];
  });
