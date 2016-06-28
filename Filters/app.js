/**
 * Created by abhishekrathore on 6/23/16.
 */
var app = angular.module("test",[]);


app.controller("testCtrl",function($scope){


    $scope.name = "alex";

})


app.filter("capitalize",function(){


    return function(input){

        return input.charAt(0).toUpperCase() + input.slice(1);

    }



})