'use strict';

describe('Controller: CadastroPagamentoCtrl', function () {

  // load the controller's module
  beforeEach(module('gridApp'));

  var CadastroPagamentoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CadastroPagamentoCtrl = $controller('CadastroPagamentoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CadastroPagamentoCtrl.awesomeThings.length).toBe(3);
  });
});
