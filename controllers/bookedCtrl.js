angular.module('devmtnTravel').controller('bookedCtrl' , function($scope , $stateParams, mainSrv){
      $scope.style = {
      }
      $scope.locations = mainSrv.travelInfo
      for (var i = 0; i < $scope.locations.length; i++) {
        if ($scope.locations[i].id == $stateParams.id) {
          $scope.location = $scope.locations[i]
          $scope.style = {
            'background-image': 'url(' + $scope.location.image + ')'
          }
        }
      }
});
