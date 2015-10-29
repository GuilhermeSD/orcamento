'use strict';

/**
 * @ngdoc function
 * @name gridApp.controller:RelatorioVendasResumoCtrl
 * @description
 * # RelatorioVendasResumoCtrl
 * Controller of the gridApp
 */
angular.module('gridApp')
  .controller('RelatorioVendasResumoCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
	
	$scope.relatorioData = [
		{
			pagamento:"Débito",
			total: 100.00,
			taxa: 10.00,
			valorVenda:15.00,
			valorTaxas:10.00,
			lucro:10.00,
			participacapGanhos: 10.00
		}
	];
	
 });