angular.module('myApp')

.controller('formController', ['$scope', function ($scope) {
    var collectionNames = ["Collection", "Star USA", "Luxe"];
    var categoryNames = ["Outerwear", "Soft Jacket", "Tailored Clothing", "Denim", "Sport Pant", "Dress Pant", "Sportshirt", "Dress Shirt", "Short", "Leather Outerwear", "Sport Vest", "Knit", "Sweater", "Footwear", "Bag", "Small Leather Good", "Woven Scarf", "Woven Hat"]
    var styleColorNames = {
        "001": "Black",
        "100": "White",
        "410": "Indigo"
    };
    $scope.season;
    $scope.collection;
    $scope.category;
    $scope.styleColor;
    $scope.styleNum;
    $scope.fabric;
    $scope.searchText;
    $scope.showSeasonError = false;
    $scope.submitButton = function () {
        var formIsOk = checkForm();
        if (formIsOk == false) {
            alert("Please enter all fields")
            return;
        }

        var article = {
            season: $scope.season,
            collection: collectionNames[$scope.collection],
            category: categoryNames[$scope.category],
            color: styleColorNames[$scope.styleColor],
            styleNumber: $scope.styleNum,
            fabric: $scope.fabric
        }

        //Push article to firebase
        var firebase = new Firebase("https://costinganalysis.firebaseio.com/seasons");

        firebase.push(article, function (error) {
            if (error) {
                alert("something happened");
            } else {
                alert("Data stored");
            }
        });

        $scope.clearForm();
    }
    $scope.clearForm = function () {
        $scope.season = '';
        $scope.collection = '';
        $scope.category = '';
        $scope.styleColor = '';
        $scope.styleNum = '';
        $scope.fabric = '';
        $scope.searchText = '';
    };

    var checkForm = function () {
        var result = true;
        if ($scope.season == undefined) {
            result = false;
            $scope.showSeasonError = true;
        }
        if ($scope.collection == undefined) {
            result = false;
            $scope.showCollectionError = true;
        }
        if ($scope.category == undefined) {
            result = false;
            $scope.showCategoryError = true;
        }
        if ($scope.styleColor == undefined) {
            result = false;
            $scope.showColorError = true;
        }
        if ($scope.styleNum == undefined) {
            result = false;
            $scope.showStyleNumError = true;
        }
        if ($scope.fabric == undefined) {
            result = false;
            $scope.showFabricError = true;
        }

        return result;

    }


    }]);
