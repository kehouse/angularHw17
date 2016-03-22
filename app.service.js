angular
  .module('sharktastic')
  .service('NewSharkPost', function($http){

    function postShark(shark){
      return $http.post('http://tiny-tiny.herokuapp.com/collections/sharks', shark)
    }
    function getSharks(){
      return $http.get('http://tiny-tiny.herokuapp.com/collections/sharks')
    }
    function deleteSharks(id){
      return $http.delete('http://tiny-tiny.herokuapp.com/collections/sharks/' + id)
    }
    return {
      postShark: postShark,
      getSharks: getSharks,
      deleteSharks: deleteSharks
    }
  });
