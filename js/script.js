angular.module('myApp', [])
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

        $scope.compareArray = [];

        $scope.submitButton = function () {
            var article = {
                season: $scope.season,
                collection: $scope.collection,
                category: $scope.category,
                color: $scope.styleColor,
                styleNumber: $scope.styleNum,
                fabric: $scope.fabric
            }
            $scope.database.push(article);

            $scope.clearForm();
        }

        $scope.clearForm = function() {
            $scope.season = '';
            $scope.collection = '';
            $scope.category = '';
            $scope.styleColor = '';
            $scope.styleNum = '';
            $scope.fabric = '';
            $scope.searchText = '';
        };

        $scope.rowClicked = function(styleNumber) {
            var position = $scope.compareArray.indexOf(styleNumber);

            if(position == -1) {
                $scope.compareArray.push(styleNumber);
            } else {
                $scope.compareArray.splice(position, 1);
            }
            console.log($scope.compareArray);
        };

        $scope.compare = function() {
            console.log("I want to compare this articles: " + $scope.compareArray);
        };
    }]);