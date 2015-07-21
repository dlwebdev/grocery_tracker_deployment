'use strict';

angular.module('angularGroceryTrackerApp')
  .controller('EditGroceryItemCtrl', function ($scope, $location, $routeParams, $http) {
  		$scope.item = {};
  		$scope.itemId = $routeParams.itemId;
  	
	   $scope.refresh = function () {
			$http.get('/items/' +  $scope.itemId).success(function (response) {    	
				$scope.item = response;
			});					   	
	   };
	   
		$scope.saveGroceryItem = function () {
			$http.put('/items/' + $scope.itemId, $scope.item);				
			$location.path("/manage-grocery-items");	      
	   };
	   
    	$scope.refresh();
  });