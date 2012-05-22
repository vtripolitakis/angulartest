'use strict';

/* Services */

angular.module('myappServices', ['ngResource']).
    factory('Property', function($resource){
  return $resource('test.php',{},{fetchPerson:{method:"GET", params:{},isArray:false}});
});
