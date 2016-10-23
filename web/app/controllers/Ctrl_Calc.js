/**
 * Created by Snooze on 17/10/2016.
 */
var aos = angular.module('AOS');

aos.controller('Ctrl_Calc',['$scope','$rootScope', 'Fact_Calculadora', function($scope, $rootScope, factory){
    $rootScope.section = 'projects';

    $scope.data = {num1: 0, num2:'', operation: '', numbers:[]};
    $scope.operation = $scope.data.num1 + ' ' + $scope.data.operation + ' ' + $scope.data.num2;
    $scope.result = 0;
    $scope.history = [];
    $scope.end = false;


    function send () {
        function displayandsave(data) {
            $scope.result = data;
            console.log('Result '+$scope.result);
            $scope.history.push($scope.operation + ' = ' + $scope.result);
            $scope.end = true;
            $scope.$apply();
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
            case 'MIN':
                factory.minimo($scope.data.numbers).then(displayandsave);
                break;
            case 'AVG':
                factory.media($scope.data.numbers).then(displayandsave);
                break;
            case 'MAX':
                factory.maximo($scope.data.numbers).then(displayandsave);
                break;
            default:
                console.log('Invalid operation')
        }
    }

    $scope.pulse = function (string) {
        console.log('Pulsed: '+string);

        if ($scope.end && string!='CE'){
            $scope.pulse('CE');
            $scope.end = false
        }
        // if ($scope.result != 0 && string != 'CE')
        //     $scope.pulse('CE');

        if (!isNaN(parseInt(string))) {
            if ((['MIN', 'AVG', 'MAX'].indexOf($scope.data.operation)) < 0) {
                if ($scope.data.operation === '') {
                    if ($scope.data.num1 === 0) {
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
                if ($scope.data.num2 == true) {
                    if ($scope.data.num1 === 0) {
                        $scope.data.num1 = ''
                    }
                    $scope.data.num1 += string
                }
            }
        } else {
            switch (string) {
                case '.':
                    if ($scope.data.num1 === 0) {
                        $scope.data.num1 = '0'
                    }
                    if ((['MIN', 'AVG', 'MAX'].indexOf($scope.data.operation)) < 0) {
                        if ($scope.data.operation === '') {
                            if ($scope.data.num1.indexOf('.') == -1) {
                                $scope.data.num1 += string;
                            }
                        } else {
                            if ($scope.data.num2 == '') {
                                $scope.data.num2 = '0'
                            }
                            if ($scope.data.num2.indexOf('.') == -1) {
                                $scope.data.num2 += string;
                            }
                        }
                    } else {
                        if ($scope.data.num1.indexOf('.') == -1) {
                            $scope.data.num1 += string;
                        }
                    }
                    break;
                case 'MIN':
                case 'AVG':
                case 'MAX':
                    if ($scope.data.operation == '') {
                        $scope.data.num1 = 0;
                        $scope.data.num2 = '';
                        $scope.result = '0';
                        $scope.data.num2 = true;
                        $scope.data.operation = string;
                    }
                    break;
                case '+':
                case '-':
                case '/':
                case '*':
                    if ($scope.data.operation == '') {
                        $scope.data.operation = string;
                    }
                    break;
                case 'CE':
                    $scope.data.operation = '';
                    $scope.data.num1 = 0;
                    $scope.data.num2 = '';
                    $scope.result = '0';
                    $scope.data.numbers = [];
                    break;
                case 'C':
                    if ((['MIN', 'AVG', 'MAX'].indexOf($scope.data.operation)) < 0) {
                        if ($scope.data.operation == '' && ($scope.data.num1 != 0)) {
                            $scope.data.num1 = $scope.data.num1.slice(0, -1);
                            if ($scope.data.num1.length === 0)
                                $scope.data.num1 = 0
                        } else {
                            if ($scope.data.num2.length != 0) {
                                $scope.data.num2 = $scope.data.num2.slice(0, -1);
                            } else {
                                $scope.data.operation = ''
                            }
                        }
                    } else {
                        if ($scope.data.num1 != 0) {
                            $scope.data.num1 = $scope.data.num1.slice(0, -1);
                            if ($scope.data.num1.length === 0)
                                $scope.data.num1 = 0
                        } else {
                            if ($scope.data.num2) {
                                if ($scope.data.numbers.length > 0) {
                                    $scope.data.num1 = $scope.data.numbers[$scope.data.numbers.length - 1];
                                    $scope.data.numbers.pop();
                                }
                            }
                        }
                    }
                    break;
                case '=':
                    if ($scope.data.operation != '') {
                        if ((['MIN', 'AVG', 'MAX'].indexOf($scope.data.operation)) >= 0) {
                            if ($scope.data.num1 != +0)
                                $scope.data.numbers.push($scope.data.num1);
                            $scope.data.num1 = 0;
                            $scope.data.num2 = false;
                        }
                        send();
                    }
                    break;
                case ',':
                    if ((['MIN', 'AVG', 'MAX'].indexOf($scope.data.operation)) >= 0) {
                        $scope.data.num2 = true;
                        $scope.data.numbers.push($scope.data.num1);
                        $scope.data.num1 = 0
                    }
                    break;
                default:
                    console.log('Invalid')
            }
        }

        if ((['MIN', 'AVG', 'MAX'].indexOf($scope.data.operation)) < 0) {
            $scope.operation = $scope.data.num1 + ' ' + $scope.data.operation + ' ' + $scope.data.num2
        } else {
            var numbers = '';
            for (num in $scope.data.numbers) {
                numbers += $scope.data.numbers[num] + ', ';
                // if ($scope.data.numbers[num]!=$scope.data.numbers[$scope.data.numbers.length-1]){
                //     numbers += ', '
                // }
            }
            if ($scope.data.num2 == true && $scope.data.num1 !== 0) {
                numbers += $scope.data.num1;
            } else {
                if ($scope.data.num2 == true)
                    numbers = numbers.slice(0, -1);
                else
                    numbers = numbers.slice(0, -2);
            }
            $scope.operation = $scope.data.operation + '(' + numbers + ')'
        }
    }
}]);