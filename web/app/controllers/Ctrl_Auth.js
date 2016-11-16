/**
 * Created by Snooze on 17/10/2016.
 */
var aos = angular.module('AOS');

aos.controller('Ctrl_Auth',['$scope','$rootScope', 'Fact_Auth', '$location', 'Fact_Utils', function($scope, $rootScope, factory, $location, utils){

    $rootScope.section = 'auth';

    $scope.login = function () {
        factory.login($scope.user.username, $scope.user.password, $rootScope.user.token).then(function (data) {
            if (data){
                console.log(data);
                $rootScope.user.token = data;
                $location.path('/');
                // console.log($location)
            }
        })
    };

    $scope.register = function () {
        utils.length($scope.user.password).then(function (data) {
            if (data && data >= 8) {
                factory.register($scope.user.username, $scope.user.password, $rootScope.user.token).then(function (data) {
                    if (data) {
                        console.log(data);
                        $rootScope.user.token = data;
                        $location.path('/');
                        // console.log($location)
                    }
                })
            } else {
                alert('Porfavor introduzca una contrasea de al menos 8 caracteres')
            }
        })
    };

    $scope.validate = function () {
        factory.validate($rootScope.user.token).then(function (data) {
            console.log('Validating: '+data);
        })
    };

    $rootScope.logout = function () {
        if (confirm("Wanna logout?")){
            //some code
            $rootScope.user = {
                username: '',
                password: '',
                token: null
            };
        }
    }

}]);