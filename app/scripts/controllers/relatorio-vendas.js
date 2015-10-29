'use strict';

/**
 * @ngdoc function
 * @name gridApp.controller:RelatorioVendasCtrl
 * @description
 * # RelatorioVendasCtrl
 * Controller of the gridApp
 */
angular.module('gridApp')
  .controller('RelatorioVendasCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
	
	$scope.relatorioData = [
		{
			cliente: 'Cliente',
			data: '2015-10-01',
			pagamento: 'Débito',
			lucro: 10.00
		}
	];
  });