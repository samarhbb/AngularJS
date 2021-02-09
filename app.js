(function(){
  'use strict';
  angular.module('LunchCheck',[]).controller('lunchCheckController',lunchCheckController);
  lunchCheckController.$inject['$scope'];
  function lunchCheckController($scope){
    $scope.customStyle={};
    $scope.turnGreen=function(){
      $scope.customStyle.colorClass="green";
    };
    $scope.turnRed=function(){
      $scope.customStyle.colorClass="red" ;
    };
  $scope.lunch="salad";
  $scope.lunchOrder=function(){
    var lunchArray=$scope.lunch.split(",");
    var fillunchArray=lunchArray.filter(function(el){return el!="";});
    console.log(fillunchArray);
    if (fillunchArray.length<=3 && lunchArray[0]!="") {
      $scope.lunchNote="Enjoy";
    $scope.turnGreen();
    }
    else if (fillunchArray.length>3) {
    $scope.lunchNote="Too Much!";
    $scope.turnGreen();
    }
    else if (fillunchArray.length==0) {
  $scope.lunchNote="Please enter data first";
  $scope.turnRed();
    }
  };
  };


})();
