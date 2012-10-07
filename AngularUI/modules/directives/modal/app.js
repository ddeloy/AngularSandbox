var app = angular.module('plunker', []);

app.controller('Main', function($scope) {
  $scope.posts = [
    {title: 'First post', content: 'Some very long content...'},
    {title: 'Second post', content: 'This one is even longer...'},
    {title: 'Third one', content: 'The last but not least...'}
  ];
  
  $scope.select = function(post) {
    $scope.selectedPost = post;
    $scope.modalIsVisible = true;
  };
  
  $scope.closeModal = function() {
    $scope.modalIsVisible = false;
  };
});
