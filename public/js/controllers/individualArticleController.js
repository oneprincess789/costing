angular.module('myApp')

.controller('individualArticleController', ['$scope', '$firebaseObject', '$routeParams', '$firebaseArray', function ($scope, $firebaseObject, $routeParams, $firebaseArray) {

    var url = "https://costinganalysis.firebaseio.com/seasons/" + $routeParams.articleId;
    var refId = new Firebase(url);
    var obj = $firebaseObject(refId);
    obj.$loaded(
        function (data) {
            $scope.article = data;
        },
        function (error) {
            console.error("Error:", error);
        }

    );


    console.log($routeParams.articleId)
}]);
