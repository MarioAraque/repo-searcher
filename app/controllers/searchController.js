app.controller('SearchController', function SearchController($scope, Github) {
  $scope.title = 'Github Searcher';
  $scope.introduction = 'Enter a keyword to search repositories';
  $scope.searchReposText = 'Search Repositories';

  $scope.searchRepo = function() {
    $scope.loadingForm = true;
    Github.searchRepo($scope.query, function(error, data) {
      if(!error)
        $scope.repos = data.items;
      $scope.loadingForm = false;
      $scope.withResults = true;
    });
  }
});
