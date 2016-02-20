angular.module('myApp')


.controller('fabricListController', ['$scope', '$firebaseArray', function ($scope, $firebaseArray) {
    
    //Create firebase
    
    var ref = new Firebase("https://costinganalysis.firebaseio.com/fabric");
    
    var firebaseObjectFabrics = $firebaseArray(ref);

    //Load the Data in an object
    firebaseObjectFabrics.$loaded(
        function (data) {
            $scope.database = data; // true
        },
        function (error) {
            console.error("Error:", error);
        }
    );

}]);
