/**
 * Created by abhishekrathore on 6/23/16.
 */
var app = angular.module("test",[]);


app.controller("testCtrl",function($scope){


    $scope.name="Abc";
    $scope.list=["A","B","C"];
    $scope.objects = [{"name":"A","value":"Real"},
        {"name":"B","value":"Imaginary"},
        {"name":"C","value":"Real"}]

})