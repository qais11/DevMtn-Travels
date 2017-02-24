angular.module('devmtnTravel').controller('locationsCtrl' , function($scope , mainSrv, $state){
$scope.locations = mainSrv.travelInfo;
console.log($scope.locations[0])
});
