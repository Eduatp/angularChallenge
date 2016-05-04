module.exports = function($http) {
	return function(scope, food) {
		var API_KEY = 'o45tYICSG97CB7TB2QM6rsany8vYd7RU85ZRmFg4';
		var endpoint = "http://api.nal.usda.gov/ndb/search/?format=json&q="+ food +
		"&sort=n&max=25&offset=0&api_key=" + API_KEY;
		  
		var successCallback = function(response)
		{
			return response.data.list.item;
		};
		  
		var errorCallback = function(response) 
		{
			alert("error: " + response.data.errors.error[0].message);
		}; 
		return $http.get(endpoint).then(successCallback, errorCallback);
	}
}
