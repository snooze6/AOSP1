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
        controller: 'Ctrl_Main'
    }).
    when('/about', {
        templateUrl: 'templates/about.html',
        controller: 'Ctrl_About'
    }).
    when('/projects/calculator', {
        templateUrl: 'templates/calculator.html',
        controller: 'Ctrl_Calc'
    }).
    otherwise({
        redirectTo: '/projects'
    });
}]);

aos.factory('Fact_Calculadora', [ '$soap', function ($soap) {
    return {
        HelloWorld: function (name) {
            return $soap.post({
                url: 'http://localhost:9000/HelloWorld',
                action: 'HelloWorld',
                params: {arg0: name}
                // params: '<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/">\
                // <Body>\
                // <sayHelloWorldFrom xmlns="http://example/">\
                // <arg0 xmlns="">'+name+'</arg0>\
                // </sayHelloWorldFrom>\
                // </Body>\
                // </Envelope>'
            })
        },
        Hello: function(){
            return $soap.post("services/HelloWorld","hello");
        }

    }
}]);

aos.controller('Ctrl_Calc',['$scope','$rootScope', 'Fact_Calculadora', function($scope, $rootScope, factory){
    $rootScope.section = 'projects';
    
    $scope.send = function (name) {
        console.log('Sending '+name);
        factory.Hello().then(function (response){
            console.log('----------------------------');
            console.log(response)
        });
    }
}]);

aos.controller('Ctrl_Main', ['$rootScope', function ($scope) {
    $scope.section = 'projects'
}]);

aos.controller('Ctrl_About', ['$rootScope', function ($scope) {
    $scope.section = 'about'
}]);