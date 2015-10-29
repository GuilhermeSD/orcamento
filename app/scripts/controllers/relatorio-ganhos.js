'use strict';

/**
 * @ngdoc function
 * @name gridApp.controller:RelatorioGanhosCtrl
 * @description
 * # RelatorioGanhosCtrl
 * Controller of the gridApp
 */
angular.module('gridApp')
  .controller('RelatorioGanhosCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
	
	$scope.relatorioData = [
		{
			mes:'2015-10-01',
			acessos: 10,
			valorVenda: 100.00,
			totalCustoCopo: 10.00,
			lucroCopo: 10.00
		}
	];
	
  });