angular.module('myApp')


.controller('fabricListController', ['$scope', '$firebaseArray', '$firebaseObject', function ($scope, $firebaseArray, $firebaseObject) {
    
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

    $scope.deleteFabric = function (id) {
        var obj = $firebaseObject("https://costinganalysis.firebaseio.com/fabric/" + id);
        obj.$remove().then(function () {
            // data has been deleted locally and in the database
            console.log("removed")
        }, function (error) {
            console.log("Error:", error);
        });
    }


}]);
