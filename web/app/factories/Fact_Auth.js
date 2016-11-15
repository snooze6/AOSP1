/**
 * Created by Snooze on 17/10/2016.
 */
var aos = angular.module('AOS');

var baseUrl = '';

// var baseUrl = 'http://localhost:8080/';
aos.factory('Fact_Auth', [ '$soap', function ($soap) {
    return {
        getItems: function () {
            return $soap.post(baseUrl+"services/Shop", "getItems");
        },
        getItem: function (id) {
            return $soap.post(baseUrl+"services/Shop", "getItemId", {arg0: id});
        },
        searchItem: function (autor) {
            console.log('Autor: '+autor);
            return $soap.post(baseUrl+"services/Shop", "getItemAutor", {arg0: autor});
        }
    }
}]);