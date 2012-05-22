'use strict';

/* App Module */

angular.module('myapp', ['myappFilters', 'myappServices']).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/default', {template: 'partials/partial1.html',   controller: DefaultCtrl}).
      when('/person/:personId', {template: 'partials/partial2.html', controller: PersonCtrl}).
      otherwise({redirectTo: '/default'});
}]);