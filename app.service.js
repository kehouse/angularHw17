angular
  .module('sharktastic')
  .service('NewSharkPost', function($http){

    function postShark(shark){
      return $http.post('http://tiny-tiny.herokuapp.com/collections/shark', shark)
  }
  function getSharks(){
    return $http.get('http://tiny-tiny.herokuapp.com/collections/shark')
  }
    return {
      postShark: postShark,
      getSharks: getSharks
    }
  });
