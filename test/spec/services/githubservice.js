'use strict';

describe('Service: gitHubService', function () {

  // load the service's module
  beforeEach(module('tomwaysongithubcomApp'));

  // instantiate service
  var gitHubService;
  beforeEach(inject(function (_gitHubService_) {
    gitHubService = _gitHubService_;
  }));

  it('should do something', function () {
    expect(!!gitHubService).toBe(true);
  });

});
