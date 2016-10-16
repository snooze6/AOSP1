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
            console.log(a+'+'+b+'='+(a+b));
            return $soap.post(baseUrl+"services/Calculator", "sum", {arg0:a, arg1:b});
            // return $soap.post("org.arman.services/Calculator", "sum", {a:a, b:b});
            // return $soap.post({
            //     url: "org.arman.services/Calculator",
            //     action: "sum",
            //     params: {a:a, b:b}
            // });
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
        switch ($scope.data.operation) {
            case '+':
                factory.suma(parseFloat($scope.data.num1), parseFloat($scope.data.num2)).then(function (data) {
                    console.log('Result: '+data)
                });
                factory.hello().then(function (data) {
                    console.log('Hello: '+data)
                });
                break;
            default:
                console.log('Invalid operation')
        }
    }

    $scope.pulse = function (string) {
        // console.log('Pulsed: '+string);

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