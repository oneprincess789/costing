/*global angular*/
angular.module('myApp', ['ngRoute', 'firebase', 'ngImgCrop'])
    //Inside the jon branch

.config(function ($routeProvider) {
    'use strict';
    $routeProvider
        .when('/form', {
            templateUrl: 'templates/form.html',
            controller: 'formController'
        })
        .when('/articles', {
            templateUrl: 'templates/articlesList.html',
            controller: 'articlesController'
        })
        .when('/', {
            templateUrl: 'templates/home.html',
            controller: 'homeController'
        })
        .when('/fabric', {
            templateUrl: 'templates/fabric.html',
            controller: 'fabricListController'
        })
        .when('/about', {
            templateUrl: 'templates/about.html',
            controller: 'aboutController'
        })
        .when('/individualArticle/:articleId', {
            templateUrl: 'templates/individualArticle.html',
            controller: 'individualArticleController'
        })
        .otherwise({
            redirectTo: '/'
        });
})

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDMHxh4B4foWMIGyN3PkErZAgBvDotnXTo",
    authDomain: "costinganalysis.firebaseapp.com",
    databaseURL: "https://costinganalysis.firebaseio.com",
    storageBucket: "costinganalysis.appspot.com",
};
firebase.initializeApp(config);

var rootRef = firebase.database().ref();
