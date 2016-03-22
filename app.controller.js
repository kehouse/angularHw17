angular
  .module('sharktastic')
  .controller('HomeController', function($scope){
  })
  .controller('CreateController', function($scope, NewSharkPost){
    // $scope.date = '';
    // $scope.location = '';
    // $scope.quantity = '';
    // $scope.type = '';
    // $scope.image = '';

    $scope.sharks = undefined;

    $scope.getSharkData = function(shark){
      console.log(shark);
      NewSharkPost.postShark(shark)
        .then(function(data){
          console.log(data);
          $scope.date = data.data.date;
          $scope.location = data.data.location;
          $scope.quantity = data.data.quantity;
          $scope.type = data.data.quantity;
          $scope.image = data.data.quantity;
        });
    }

    NewSharkPost.getSharks().then(function(sharks){
      console.log(sharks);
      $scope.sharks = sharks.data;
      console.log($scope.sharks);
    });
  });
