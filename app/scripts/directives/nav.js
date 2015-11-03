'use strict';

/**
 * @ngdoc directive
 * @name orcamentoApp.directive:nav
 * @description
 * # nav
 */
angular.module('orcamentoApp')
  .directive('nav', function ($location) {
    return {
      templateUrl: 'views/nav.html',
      restrict: 'E',
	  replace:true,
	  link: function(scope) {
		scope.local = '';
		scope.$on('$locationChangeSuccess', function() {
			scope.local = $location.path();
		});
	  }
    };
  });