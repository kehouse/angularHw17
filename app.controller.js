angular
  .module('sharktastic')
  .controller('HomeController', function($scope){
  })
  .controller('CreateController', function($scope, NewSharkPost){
    $scope.sharks = undefined;

    $scope.createShark = function(shark){
      NewSharkPost.postShark(shark)
        .then(function(data){
          console.log(data);
          // $scope.sharks.push(shark);
        });
    }
  })
  .controller('PostController', function($scope, NewSharkPost){
    NewSharkPost.getSharks().then(function(sharks){
      console.log(sharks);
      $scope.sharks = sharks.data;
      console.log($scope.sharks);
    });

    $scope.deleteShark = function(shark){
      NewSharkPost.deleteSharks(shark._id).then(function(sharks){
        console.log(sharks);
        $scope.sharks = sharks.data;
        console.log($scope.sharks);
    });
  }
})
