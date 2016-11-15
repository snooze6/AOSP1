/**
 * Created by Snooze on 17/10/2016.
 */
var aos = angular.module('AOS');

var baseUrl = '';
// function parseItems(items){
//     return new Promise(function (fulfill, reject){
//         var ret = [];
//         // var ret = {};
//         for (i in items){
//             ret.push(parseFloat(items[i]));
//             // ret['arg'+i] = parseFloat(items[i]);
//             if (isNaN(parseFloat(items[i]))){
//                 ret = false;
//                 break
//             }
//         }
//         if (ret)
//             fulfill(ret);
//         else
//             reject(ret)
//     });
// }

// var baseUrl = 'http://localhost:8080/';
aos.factory('Fact_Shop', [ '$soap', function ($soap) {
    return {
        getItems: function () {
            return $soap.post(baseUrl+"services/Shop", "getItems");
        }
    }
}]);