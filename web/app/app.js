/**
 * Created by arman on 04/10/2016.
 */

var aos = angular.module('AOS', [
    'ngRoute',
    'ui.bootstrap',
    'angularSoap'
]);

aos.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    when('/projects', {
        templateUrl: 'templates/projects.html',
        controller: ''
    }).
    when('/about', {
        templateUrl: 'templates/about.html',
        controller: 'Ctrl_About'
    }).
    when('/projects/calculator', {
        templateUrl: 'templates/calculator.html',
        controller: 'Ctrl_Calc'
    }).
    when('/projects/textanalyzer', {
        templateUrl: 'templates/textanalyzer.html',
        controller: 'Ctrl_Text'
    }).
    when('/projects/shop', {
        templateUrl: 'templates/shop.html',
        controller: 'Ctrl_Shop'
    }).
    when('/projects/shop/products/:pId', {
        templateUrl: 'templates/item.html',
        controller: 'Ctrl_Shop_Item'
    }).
    when('/auth', {
        templateUrl: 'templates/auth.html',
        controller: 'Ctrl_Auth'
    }).
    otherwise({
        redirectTo: '/projects'
    });
}]);

