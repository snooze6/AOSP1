/**
 * Created by Snooze on 17/10/2016.
 */
var aos = angular.module('AOS');

aos.controller('Ctrl_Currency',['$scope','$rootScope', 'Fact_Utils', function($scope, $rootScope, factory){
    $scope.data = null;

    $scope.radioModel = 1;

    $scope.change = function () {
        console.log('Change...');
        if ($scope.numbers && $scope.numbers.length>0) {
            var split = $scope.numbers.split(',');
            var n=[];
            for (var j in split){
                var k = parseFloat(split[j]);
                n.push(k);
                if (isNaN(k)){
                    alert('Por favor introduzca una serie de números');
                    // $scope.numbers = "";
                    return false
                }
            }
            var i, j;
            if ($scope.radioModel ==1){
                i = ""+'\u20ac'; j = "$";
                // Tenge -> Error
                // i = ""+'\u20b8'; j = "$"
            } else {
                j = ""+'\u20ac'; i = "$"
            }
            console.log(i+' - '+j);
            // factory.change(n,i,j).onerror(function (err) {
            //     console.log('Error');
            //     console.log(err)
            // });
            factory.change(n,i,j).then(function (data) {
                if (data){
                    if (Array.isArray(data)){
                        // console.log('Array');
                        $scope.data = [];
                        for (var w in data){
                            $scope.data.push({
                                amount1: n[w],
                                amount2: data[w],
                                currency1: i,
                                currency2: j
                            })
                        }

                    } else {
                        // console.log('Not array');
                        $scope.data = [];
                        $scope.data.push({
                            amount1: n[0],
                            amount2: data,
                            currency1: i,
                            currency2: j
                        })
                    }

                }
            }, function (err, data) {
                console.log('Catch error');
                console.log(err);
                // console.log(data)
            })
        } else {
            alert('Por favor introduzca algun numero')
        }
    };

    $scope.changeModel = function (i) {
        console.log("Called");
        $scope.radioModel = i
    }

}]);