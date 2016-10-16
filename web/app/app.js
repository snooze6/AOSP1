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

var baseUrl = '';
// var baseUrl = 'http://localhost:8080/';
aos.factory('Fact_Calculadora', [ '$soap', function ($soap) {
    return {
        hello: function(){
            return $soap.post(baseUrl+"services/HelloWorld","hello");
        },
        suma: function(a,b){
            // console.log(a+'+'+b+'='+(a+b));
            return $soap.post(baseUrl+"services/Calculator", "sum", {arg0:a, arg1:b});
        },
        resta: function(a,b){
            // console.log(a+'-'+b+'='+(a+b));
            return $soap.post(baseUrl+"services/Calculator", "les", {arg0:a, arg1:b});
        },
        multiplicacion: function(a,b){
            // console.log(a+'*'+b+'='+(a+b));
            return $soap.post(baseUrl+"services/Calculator", "prod", {arg0:a, arg1:b});
        },
        division: function(a,b){
            // console.log(a+'/'+b+'='+(a+b));
            return $soap.post(baseUrl+"services/Calculator", "div", {arg0:a, arg1:b});
        }
    }
}]);

aos.controller('Ctrl_Calc',['$scope','$rootScope', 'Fact_Calculadora', function($scope, $rootScope, factory){
    $rootScope.section = 'projects';

    $scope.data = {num1: '0', num2:'', operation: ''};
    $scope.result = 0;
    $scope.history = [];
    
    function send () {
        console.log('Sending '+$scope.data.num1+$scope.data.operation+$scope.data.num2);

        function displayandsave(data) {
            $scope.result = data;
            $scope.history.push({
                num1: $scope.data.num1,
                num2: $scope.data.num2,
                operation: $scope.data.operation,
                result: data
            });
        }
        switch ($scope.data.operation) {
            case '+':
                factory.suma(parseFloat($scope.data.num1), parseFloat($scope.data.num2)).then(displayandsave);
                break;
            case '-':
                factory.resta(parseFloat($scope.data.num1), parseFloat($scope.data.num2)).then(displayandsave);
                break;
            case '*':
                factory.multiplicacion(parseFloat($scope.data.num1), parseFloat($scope.data.num2)).then(displayandsave);
                break;
            case '/':
                factory.division(parseFloat($scope.data.num1), parseFloat($scope.data.num2)).then(displayandsave);
                break;
            default:
                console.log('Invalid operation')
        }
    }

    $scope.pulse = function (string) {
        // console.log('Pulsed: '+string);
        if ($scope.result!=0 && string!='CE')
            $scope.pulse('CE');

        if (!isNaN(parseInt(string))) {
            if ($scope.data.operation === '') {
                if ($scope.data.num1 === '0') {
                    $scope.data.num1 = ''
                }
                $scope.data.num1 += string
            } else {
                if ($scope.data.num2 === '0') {
                    $scope.data.num2 = ''
                }
                $scope.data.num2 += string
            }
        } else {
            switch (string) {
                case '.':
                    if ($scope.data.operation === '') {
                        if ($scope.data.num1.indexOf('.') == -1) {
                            $scope.data.num1 += string;
                        }
                    } else {
                        if ($scope.data.num2 == ''){
                            $scope.data.num2 = '0'
                        }
                        if ($scope.data.num2.indexOf('.') == -1) {
                            $scope.data.num2 += string;
                        }
                    }
                    break;
                case '+':
                    if ($scope.data.operation == '')
                        $scope.data.operation = string;
                    break;
                case '-':
                    if ($scope.data.operation == '')
                        $scope.data.operation = string;
                    break;
                case '/':
                    if ($scope.data.operation == '')
                        $scope.data.operation = string;
                    break;
                case '*':
                    if ($scope.data.operation == '')
                        $scope.data.operation = string;
                    break;
                case 'CE':
                    $scope.data.operation = '';
                    $scope.data.num1 = '0';
                    $scope.data.num2 = '';
                    $scope.result = '0';
                    break;
                case 'C':
                    if ($scope.data.operation == ''){
                        $scope.data.num1 = $scope.data.num1.slice(0, -1);
                        if ($scope.data.num1.length == 0)
                            $scope.data.num1 = '0'
                    } else {
                        console.log($scope.data.num2.length);
                        if ($scope.data.num2.length != 0) {
                            $scope.data.num2 = $scope.data.num2.slice(0, -1);
                        } else {
                            $scope.data.operation = ''
                        }
                    }
                    break;
                case '=':
                    if ($scope.data.operation != '')
                        send();
                    break;
                default:
                    console.log('Invalid')
            }
        }
    }
}]);

aos.controller('Ctrl_Main', ['$rootScope', function ($scope) {
    $scope.section = 'projects'
}]);

aos.controller('Ctrl_About', ['$rootScope', function ($scope) {
    $scope.section = 'about'
}]);