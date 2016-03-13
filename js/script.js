/*global angular*/
angular.module('myApp', ['ngRoute', 'firebase', 'ngImgCrop'])
    .config(function ($routeProvider) {
        'use strict';
        $routeProvider
            .when('/start', {
                templateUrl: 'templates/start.html',
                controller: 'startController'
            })
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
