'use strict';

angular.module('angularGroceryTrackerApp')
  .controller('ManageGroceryItemsCtrl', function ($scope,$http) {
		$scope.item = {name: '',price: ''};		
		$scope.items = [];
    
	   $scope.addGroceryItem = function() {
			if(!$scope.item.name || $scope.item.name === '') { return; }	   	
	   	$http.post('/items', $scope.item);
	   	
	   	$scope.refresh();
	   };
	   
	   $scope.deleteItem = function (id) {
			$http.delete('/items/' + id);	
			$scope.refresh();	   	
	   };
	   
	   $scope.refresh = function () {
			$http.get('/items/').success(function (response) {    	
				$scope.items = response;
			});	
			$scope.item = {name: '',price: ''};	   	
	   };
	      
    	$scope.refresh();
  });