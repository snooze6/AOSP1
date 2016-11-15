/**
 * Created by Snooze on 17/10/2016.
 */
var aos = angular.module('AOS');

aos.controller('Ctrl_Auth',['$scope','$rootScope', 'Fact_Auth', function($scope, $rootScope, factory){

    $rootScope.section = 'auth';

    $scope.login = function () {
        factory.login($scope.user.username, $scope.user.password, $rootScope.user.token).then(function (data) {
            if (data){
                console.log(data);
                $rootScope.user.token = data
            }
        })
    };

    $scope.register = function () {
        factory.register($scope.user.username, $scope.user.password, $rootScope.user.token).then(function (data) {
            if (data){
                console.log(data);
                $rootScope.user.token = data
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