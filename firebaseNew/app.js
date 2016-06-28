/**
 * Created by abhishekrathore on 6/23/16.
 */
var app = angular.module("test",["firebase"]);


app.controller("testCtrl",function($scope,$firebaseArray){


    var ref = firebase.database().ref();


     $scope.names = $firebaseArray(ref);

    $scope.add =function(){

        $scope.names.$add($scope.user);
    }





})