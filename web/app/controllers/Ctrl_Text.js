/**
 * Created by Snooze on 17/10/2016.
 */
var aos = angular.module('AOS');

aos.controller('Ctrl_Text',['$scope','$rootScope', 'Fact_Utils', function($scope, $rootScope, factory){
    $scope.data = null;

    $scope.analyze = function () {
        console.log('Analyzing...');
        if ($scope.string && $scope.string.length>0) {
            factory.stats($scope.string, $scope.word).then(
                function (data) {
                    if (! $scope.data){
                        $scope.data = {}
                    }
                    $scope.data.stats = data;
                    $scope.data.word = $scope.word;
                    $scope.data.string = $scope.string;
                }
            )
        } else {
            alert('Por favor introduzca algo en el texto')
        }
    }

}]);