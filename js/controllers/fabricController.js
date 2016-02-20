angular.module('myApp')

.controller('fabricController', ['$scope', function ($scope) {

    $scope.fabricCode = '';
    $scope.mill = '';
    $scope.article = '';
    $scope.content = '';
    $scope.fabricWidth = '';
    $scope.cuttableWidth = '';
    $scope.weight = '';
    $scope.price = '';
    $scope.showFabricCodeError = false;
    $scope.submitButton = function () {
        var formIsOk = checkForm();
        if (formIsOk == false) {
            alert("Please enter all fields")
            return;
        }

        var fabric = {
            code: $scope.fabricCode,
            mill: $scope.mill,
            article: $scope.article,
            content: $scope.content,
            fabricWidth: $scope.fabricWidth,
            cuttableWidth: $scope.cuttableWidth,
            weight: $scope.weight,
            price: $scope.price
        }

        //Push article to firebase
        var firebase = new Firebase("https://costinganalysis.firebaseio.com/fabric");

        firebase.push(fabric, function (error) {
            if (error) {
                alert("something happened");
            } else {
                alert("Data stored");
            }
        });

        $scope.clearForm();
    }

    $scope.clearForm = function () {
        $scope.fabricCode = '';
        $scope.mill = '';
        $scope.article = '';
        $scope.content = '';
        $scope.fabricWidth = '';
        $scope.cuttableWidth = '';
        $scope.weight = '';
        $scope.price = '';
    };

    var checkForm = function () {
        var result = true;
        if ($scope.fabricCode == undefined) {
            result = false;
            $scope.showFabricCodeError = true;
        }

        return result;

    }
    


}]);
