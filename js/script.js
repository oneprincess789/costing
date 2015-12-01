angular.module('myApp', ['ngRoute', 'firebase'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'templates/start.html'
            })
            .when('/form', {
                templateUrl: 'templates/form.html',
                controller: 'myController'
            })
            .when('/articles', {
                templateUrl: 'templates/articlesList.html',
                controller: 'myController'
            })
            .otherwise({
                redirectTo: '/'
            });
    })
    .controller('myController', ['$scope', '$firebaseArray', function myController($scope, $firebaseArray) {
        $scope.season;
        $scope.collection;
        $scope.category;
        $scope.styleColor;
        $scope.styleNum;
        $scope.fabric;
        $scope.searchText;

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

        var collectionNames = ["Collection", "Star USA", "Luxe"];
        var categoryNames = ["Outerwear", "Soft Jacket", "Tailored Clothing", "Denim", "Sport Pant", "Dress Pant", "Sportshirt", "Dress Shirt", "Short", "Leather Outerwear", "Sport Vest", "Knit", "Sweater", "Footwear", "Bag", "Small Leather Good", "Woven Scarf", "Woven Hat"]
        var styleColorNames = {
            "001": "Black",
            "100": "White",
            "410": "Indigo"
        };

        $scope.compareArray = [];

        $scope.submitButton = function () {
            var article = {
                season: $scope.season,
                collection: collectionNames[$scope.collection],
                category: categoryNames[$scope.category],
                color: styleColorNames[$scope.styleColor],
                styleNumber: $scope.styleNum,
                fabric: $scope.fabric
            }

            //Push article to firebase
            var firebase = new Firebase("https://consting.firebaseio.com/seasons");

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