angular.module('myApp')

.controller('formController', ['$scope', '$firebaseArray', function ($scope, $firebaseArray) {
    var collectionNames = ["Collection", "Star USA", "Luxe"];
    var categoryNames = ["Outerwear", "Soft Jacket", "Tailored Clothing", "Denim", "Sport Pant", "Dress Pant", "Sportshirt", "Dress Shirt", "Short", "Leather Outerwear", "Sport Vest", "Knit", "Sweater", "Footwear", "Bag", "Small Leather Good", "Woven Scarf", "Woven Hat"]
    var styleColorNames = {
        "001": "Black",
        "100": "White",
        "410": "Indigo"
    };

    $scope.showImg = false;
    $scope.myImage = '';
    $scope.myCroppedImage = '../../images/noimgavailable.jpg';
    $scope.season;
    $scope.collection;
    $scope.category;
    $scope.styleColor;
    $scope.styleNum;
    $scope.fabricChoice;
    $scope.searchText;
    $scope.showSeasonError = false;
    $scope.fabrics;

    var handleFileSelect = function (evt) {
        $scope.showImg = true;
        var file = evt.currentTarget.files[0];
        var reader = new FileReader();
        reader.onload = function (evt) {
            $scope.$apply(function ($scope) {
                $scope.myImage = evt.target.result;
            });
        };
        reader.readAsDataURL(file);
    };

    angular.element(document.querySelector('#fileInput')).on('change', handleFileSelect);

    var ref = new Firebase("https://costinganalysis.firebaseio.com/fabric");

    var firebaseObjectFabrics = $firebaseArray(ref);

    //Load the Data in an object
    firebaseObjectFabrics.$loaded(
        function (data) {
            $scope.fabrics = data; // true
            console.log($scope.fabrics)
        },
        function (error) {
            console.error("Error:", error);
        }

    );


    $scope.submitButton = function () {
        var formIsOk = checkForm();
        if (formIsOk == false) {
            alert("Please enter all fields")
            return;
        }

        delete $scope.fabricChoice.$id;
        delete $scope.fabricChoice.$priority;

        var article = {
            season: $scope.season,
            collection: collectionNames[$scope.collection],
            category: categoryNames[$scope.category],
            color: styleColorNames[$scope.styleColor],
            styleNumber: $scope.styleNum,
            fabric: $scope.fabricChoice,
            image: $scope.myCroppedImage
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
        $scope.fabricChoice = '';
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
        if ($scope.fabricChoice == undefined) {
            result = false;
            $scope.showFabricError = true;
        }

        return result;

    }




    }]);
