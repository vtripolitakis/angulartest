'use strict';

/* Services */

angular.module('myappServices', ['ngResource']).
    factory('Property', function($resource){
  return $resource('url goes here', {} });
});
