'use strict';

/**
 * @ngdoc overview
 * @name gridApp
 * @description
 * # gridApp
 *
 * Main module of the application.
 */
angular
  .module('orcamentoApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/relatorio-ganhos', {
        templateUrl: 'views/relatorio-ganhos.html',
        controller: 'RelatorioGanhosCtrl',
        controllerAs: 'relatorioGanhos'
      })
      .when('/relatorio-vendas', {
        templateUrl: 'views/relatorio-vendas.html',
        controller: 'RelatorioVendasCtrl',
        controllerAs: 'relatorioVendas'
      })
      .when('/relatorio-vendas-resumo', {
        templateUrl: 'views/relatorio-vendas-resumo.html',
        controller: 'RelatorioVendasResumoCtrl',
        controllerAs: 'relatorioVendasResumo'
      })
      .when('/cadastro-pagamento', {
        templateUrl: 'views/cadastro-pagamento.html',
        controller: 'CadastroPagamentoCtrl',
        controllerAs: 'cadastroPagamento'
      })
      .otherwise({
        redirectTo: '/'
      });
  });