/**
 * Created by abhishekrathore on 6/23/16.
 */
var app = angular.module("test",[]);


app.controller("testCtrl",function($scope){


    $scope.name = "ngcopy"

    $scope.copy = function(data){

        alert("copied :"+data);
    }


})