require('angular')
var MainController = require('./controllers/MainController')
var FoodController = require('./controllers/FoodController')
var FoodShowController = require('./controllers/FoodShowController')
var SearchFoodService = require('./services/SearchFoodService')
var favDirective = require('./directives/favDirective')


var app = angular.module('app', ['ngRoute','ngResource','ngStorage']);

app.factory('SearchFoodService', ['$http', SearchFoodService]);

app.controller('MainController', ['$http','$scope', MainController]);

app.controller('FoodController', ['$scope','SearchFoodService', '$localStorage', FoodController]);

app.controller('FoodShowController', ['$http','$scope','$routeParams','$localStorage', FoodShowController]);

app.directive('food',favDirective);

app.config(function($routeProvider) {
    $routeProvider
      .when('/basic_report/:ndbno', {
        templateUrl: 'partials/basic_report.html',
        controller: 'FoodController'
      })
      .when('/bookmarks', {
        templateUrl: 'partials/bookmarks.html'
      })
      .when('/searcher', {
        templateUrl: 'partials/searcher.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });