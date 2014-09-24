'use strict';

describe('Controller: StarredCtrl', function () {

  // load the controller's module
  beforeEach(module('tomwaysongithubcomApp'));

  var StarredCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StarredCtrl = $controller('StarredCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
