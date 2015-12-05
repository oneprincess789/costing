angular.module('myApp')

.controller('articlesController', ['$scope', function ($scope) {
    //Create firebase
    var ref = new Firebase("https://consting.firebaseio.com/seasons");
    var firebaseObjectSeasons = $firebaseArray(ref);

    //Load the Data in an object
    firebaseObjectSeasons.$loaded(
        function (data) {
            $scope.database = data; // true
        },
        function (error) {
            console.error("Error:", error);
        }
    );

    $scope.rowsRed = false;
    $scope.compareArray = [];
    
    //$scope.selectedClass = function(index) {
    //    if($scope.compareArray) {}
    //};

    $scope.rowClicked = function (styleNumber, index) {
        var position = $scope.compareArray.indexOf(styleNumber);

        if (position == -1) {
            $scope.compareArray.push(styleNumber);
        } else {
            $scope.compareArray.splice(position, 1);
        }
        console.log($scope.compareArray);

        $scope.rowIndexClicked = index;
    };

    $scope.compare = function () {
        console.log("I want to compare this articles: " + $scope.compareArray);
    };
    }]);
