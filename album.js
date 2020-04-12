angular.module('albumApp', [])

.controller('AlbumCtrl', ['$scope', '$http', function($scope, $http) {
  $scope.url = 'images.json';
  $scope.images = [];
  $scope.imageCategories = [];
  $scope.currentImage = {};

  $scope.handleImagesLoaded = function(data) {
    $scope.images = data;
    $scope.currentImage = _.first($scope.images);
    $scope.imageCategories = _.uniq(_.pluck($scope.images, 'category'));
    // console.log($scope.imageCategories)
  }

  $scope.fetch = function() {
    $http.get($scope.url)
      .then(res => $scope.handleImagesLoaded(res.data))
      .catch(err => console.log(err));
  }
  
  $scope.setCurrentImage = function(image) {
    $scope.currentImage = image;
  }

  $scope.fetch();
}])