//Inside the jon branch

angular.module('myApp', [])
.controller('myController', ['$scope',function myController($scope) {
	$scope.season;
	$scope.collection;
	$scope.category;
	$scope.styleColor;
	$scope.styleNum;
	$scope.fabric;
	$scope.database = [];
	$scope.submitButton = function() {
		console.log($scope.season)
		console.log($scope.collection)
		console.log($scope.category)
		console.log($scope.styleColor)
		console.log($scope.styleNum)
		console.log($scope.fabric)
		var article = {
			season: $scope.season,
			collection: $scope.collection,
			category: $scope.category,
			color: $scope.styleColor,
			styleNumber: $scope.styleNum,
			fabric: $scope.fabric
		}
		$scope.database.push(article)
	}
}]);