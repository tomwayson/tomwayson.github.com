'use strict';

/**
 * @ngdoc function
 * @name tomwaysongithubcomApp.controller:StarredCtrl
 * @description
 * # StarredCtrl
 * Controller of the tomwaysongithubcomApp
 */
angular.module('tomwaysongithubcomApp')
  .controller('StarredCtrl', function ($scope, gitHubService) {
    $scope.$parent.page = 'starred';
    // get starred repos
    gitHubService.getStarredRepos(1, 10)
    .success(function(starredRepos) {
      $scope.starredRepos = starredRepos;
    });
  });
