module.exports = function($http, $scope, $routeParams, $localStorage) {
	var API_KEY = 'o45tYICSG97CB7TB2QM6rsany8vYd7RU85ZRmFg4';
	$http.get('http://api.nal.usda.gov/ndb/reports/?ndbno=' + $routeParams.ndbno + '&type=f&format=json&api_key='+ API_KEY).success(function(response) {
        return $scope.$storage.detail = response; 
      });

}