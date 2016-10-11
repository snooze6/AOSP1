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
    when('/', {
        templateUrl: 'templates/projects.html',
        controller: 'Ctrl_Main'
    }).
    when('/about', {
        templateUrl: 'templates/about.html',
        controller: ''
    }).
    when('/contact', {
        templateUrl: 'templates/contact.html',
        controller: ''
    }).
    otherwise({
        redirectTo: '/'
    });
}]);

aos.factory('Fact_Calculadora', [ '$soap', function ($soap) {
    return {
        hello: function (name) {
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
        }

    }
}]);

aos.controller('Ctrl_Main',['$scope', 'Fact_Calculadora', function($scope, factory){
    $scope.title = 'Projects page';
    console.log($scope.title);
    
    $scope.send = function (name) {
        console.log('Sending '+name);
        factory.hello(name).then(function (response){
            console.log('----------------------------');
            console.log(response)
        });
    }
}]);