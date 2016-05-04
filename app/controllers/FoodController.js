module.exports = function($scope, SearchFoodService, $localStorage) {
  $scope.$storage = $localStorage;
  $scope.foodModel = [];
  this.findFood = function() {
	  var food = $scope.$storage.food
	  SearchFoodService($scope, food).then(function(data){
	  	$scope.$storage.foodList = data;
	  	$scope.foodModel = data;
	  });
  }
  this.getFavs = function()
  {
  	var favs = JSON.parse(localStorage.getItem('favorites')) || [];
  	$scope.favFoodModel= [];
  	$scope.$storage.foodList.forEach(function(foodItem){
  		favs.map(function(favFoodItem){
  			if(foodItem.ndbno == favFoodItem){
  				$scope.favFoodModel.push(foodItem);
  			}
  		}); 		
  	});
  	
  }
}