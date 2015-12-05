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
            .otherwise({
                redirectTo: '/'
            });
    })
