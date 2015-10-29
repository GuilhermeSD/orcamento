'use strict';

describe('Controller: RelatorioGanhosCtrl', function () {

  // load the controller's module
  beforeEach(module('gridApp'));

  var RelatorioGanhosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RelatorioGanhosCtrl = $controller('RelatorioGanhosCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RelatorioGanhosCtrl.awesomeThings.length).toBe(3);
  });
});
