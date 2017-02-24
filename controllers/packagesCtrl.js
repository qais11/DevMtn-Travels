angular.module('devmtnTravel').controller('packagesCtrl' , function($scope ,$stateParams ,mainSrv){

$scope.packages = mainSrv.travelInfo;
console.log($scope.packages)
});
