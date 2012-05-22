'use strict';

/* Filters */

angular.module('myappFilters', []).filter('myfilter', function() {
  return function(input) {
    return input ? 'true' : 'not true';
  };
});
