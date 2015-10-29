'use strict';

describe('Controller: RelatorioVendasResumoCtrl', function () {

  // load the controller's module
  beforeEach(module('gridApp'));

  var RelatorioVendasResumoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RelatorioVendasResumoCtrl = $controller('RelatorioVendasResumoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RelatorioVendasResumoCtrl.awesomeThings.length).toBe(3);
  });
});
