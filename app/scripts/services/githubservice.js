'use strict';

/**
 * @ngdoc service
 * @name tomwaysongithubcomApp.gitHubService
 * @description
 * # gitHubService
 * Service in the tomwaysongithubcomApp.
 */
angular.module('tomwaysongithubcomApp')
  .service('gitHubService', function gitHubService($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.getStarredRepos = function(page, perPage) {
      var p = page || 1;
      var pp = perPage || 100;
      return $http.get('https://api.github.com/users/tomwayson/starred?page=' + p + '&per_page=' + pp);
    }
  });
