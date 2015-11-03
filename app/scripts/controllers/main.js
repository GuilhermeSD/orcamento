'use strict';

/**
 * @ngdoc function
 * @name orcamentoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the orcamentoApp
 */
angular.module('orcamentoApp')
  .controller('MainCtrl',function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.use = true;
  });