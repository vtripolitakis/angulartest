'use strict';

/* Controllers */

function DefaultCtrl($scope, Property) {

	var res = Property.query();
	$scope.results = res;
	
	$scope.img1='';

	$scope.showPersonInfo = function (id)
	{

		Property.fetchPerson({personId:id},function(res){$scope.img1=res.img});
		
	}

}

function PersonCtrl($scope, $routeParams, Property) {
  
}
