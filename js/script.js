/*global angular*/
angular.module('myApp', ['ngRoute', 'firebase'])
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
            .when('/home', {
                templateUrl: 'templates/home.html',
                controller: 'homeController'
            })
            .when('/fabrics', {
                templateUrl: 'templates/fabric.html',
                controller: 'fabricController'
            })
            .when('/fabricList', {
                templateUrl: 'templates/fabricList.html',
                controller: 'fabricListController'
            })
            .otherwise({
                redirectTo: '/'
            });
    })
