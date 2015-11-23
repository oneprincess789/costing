angular.module('myApp', ['ngRoute'])
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
    .controller('myController', ['$scope', function myController($scope) {
        $scope.season;
        $scope.collection;
        $scope.category;
        $scope.styleColor;
        $scope.styleNum;
        $scope.fabric;
        $scope.searchText;
        $scope.database = [{
            "season": "pf16",
            "collection": "collection",
            "category": "ow",
            "color": "black",
            "styleNumber": "1",
            "fabric": "1234",
            "$$hashKey": "object:3"
        }, {
            "season": "pf16",
            "collection": "collection",
            "category": "ow",
            "color": "black",
            "styleNumber": "2",
            "fabric": "123",
            "$$hashKey": "object:5"
        }, {
            "season": "pf16",
            "collection": "collection",
            "category": "ow",
            "color": "black",
            "styleNumber": "3",
            "fabric": "123",
            "$$hashKey": "object:7"
        }, {
            "season": "pf16",
            "collection": "collection",
            "category": "ow",
            "color": "black",
            "styleNumber": "4",
            "fabric": "123",
            "$$hashKey": "object:9"
        }, {
            "season": "pf16",
            "collection": "collection",
            "category": "ow",
            "color": "black",
            "styleNumber": "5",
            "fabric": "123",
            "$$hashKey": "object:11"
        }];

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
            $scope.database.push(article);

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