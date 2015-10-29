'use strict';

describe('Controller: RelatorioVendasCtrl', function () {

  // load the controller's module
  beforeEach(module('gridApp'));

  var RelatorioVendasCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RelatorioVendasCtrl = $controller('RelatorioVendasCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RelatorioVendasCtrl.awesomeThings.length).toBe(3);
  });
});
