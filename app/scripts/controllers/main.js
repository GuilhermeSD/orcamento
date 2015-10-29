'use strict';

/**
 * @ngdoc function
 * @name gridApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gridApp
 */
angular.module('gridApp')
  .controller('MainCtrl',function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
	
	$scope.clientes = [
		{idCliente: 1, nome:'eeee'},
		{idCliente: 2, nome:'eeee 2'}	
	];

	$scope.pagamentos = [
		{idPagamento: 1, descricao:'Boleto'},
		{idPagamento: 5, descricao:'Cartao'},
		{idPagamento: 3, descricao:'Débito'},
		{idPagamento: 4, descricao:'Cheque'}
	];
	
	$scope.registraAcesso = function (cliente, pagamento) {
		alert('Registrado');
	};
	
  });