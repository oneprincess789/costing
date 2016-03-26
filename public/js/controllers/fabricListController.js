angular.module('myApp')


.controller('fabricListController', ['$scope', '$firebaseArray', '$firebaseObject', function ($scope, $firebaseArray, $firebaseObject) {


    $scope.fabricCode = '';
    $scope.mill = '';
    $scope.article = '';
    $scope.content = '';
    $scope.fabricWidth = '';
    $scope.cuttableWidth = '';
    $scope.weight = '';
    $scope.price = '';
    $scope.showFabricCodeError = false;
    $scope.isEdit = false
    $scope.currentId;
    $scope.submitButton = function () {
        var formIsOk = checkForm();
        if (formIsOk == false) {
            alert("Please enter all fields")
            return;
        }

        if ($scope.isEdit == true) {
            var urlEdit = "https://costinganalysis.firebaseio.com/fabric/" + $scope.currentId
            var refIdEdit = new Firebase(urlEdit);
            var objEdit = $firebaseObject(refIdEdit);
            // Modify the 'first' and 'last' children, but leave other data at fredNameRef unchanged
            refIdEdit.update({
                code: $scope.fabricCode,
                mill: $scope.mill,
                article: $scope.article,
                content: $scope.content,
                fabricWidth: $scope.fabricWidth,
                cuttableWidth: $scope.cuttableWidth,
                weight: $scope.weight,
                price: $scope.price
            }, function (error) {
                if (error) {
                    console.log('Error updating');
                } else {
                    alert('Successfully updated!');
                }
            });
        } else {

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
    }


    var checkForm = function () {
        var result = true;
        if ($scope.fabricCode == undefined) {
            result = false;
            $scope.showFabricCodeError = true;
        }

        return result;

    }

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
        var urlDelete = "https://costinganalysis.firebaseio.com/fabric/" + id
        var refIdDelete = new Firebase(urlDelete);
        var objDelete = $firebaseObject(refIdDelete);
        objDelete.$remove().then(function () {
            // data has been deleted locally and in the database
            console.log("removed")
        }, function (error) {
            console.log("Error:", error);
        });
    }

    $scope.editFabric = function (id) {
        $scope.currentId = id;
        $scope.isEdit = true
        var url = "https://costinganalysis.firebaseio.com/fabric/" + id
        var refId = new Firebase(url);
        var obj = $firebaseObject(refId);
        obj.$loaded(
            function (data) {
                $scope.fabricCode = data.code;
                $scope.mill = data.mill;
                $scope.article = data.article;
                $scope.content = data.content;
                $scope.fabricWidth = data.fabricWidth;
                $scope.cuttableWidth = data.cuttableWidth;
                $scope.weight = data.weight;
                $scope.price = data.price;
            },
            function (error) {
                console.error("Error:", error);
            }

        );
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

}]);
