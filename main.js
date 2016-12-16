angular.module('bookieApp', [])
  .controller('MainController', function($scope) {
    $scope.books =
 [
     {
       name: "My life in France",
     },
     {
       name: "Power of Now",
     }
   ] 

  });
