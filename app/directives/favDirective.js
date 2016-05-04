module.exports = function() {
	return {
		retrict: 'E',
		scope: {
			food:'='
		},
		template: '<td class="list"><span id="{{food.ndbno}}">{{food.ndbno}}</span></td><td>{{food.name}}</td><td><a ng-href="#basic_report/{{food.ndbno}}" class="btn btn-success btn-block" > GET</a></td>',
		
		link: { post: function (scope, element, attribute, controller){
			
			var favs = JSON.parse(localStorage.getItem('favorites')) || [];
			var nElement = $(element[0].firstChild.firstChild);

			favs.map(function(ndbno){
				if(ndbno == scope.food.ndbno){
					nElement[0].className = 'fav';
				}
			});
			$(nElement).bind('click', function(event){
				
				var cElement = event.currentTarget;
				var foodId = cElement.id;
				var foodIndex = cElement.className.indexOf('fav');

				if(foodIndex == -1){
					cElement.className = cElement.className + ' fav';
					if (favs.indexOf(foodId) == -1) {
    					favs.push(foodId);
					}
				} else {		
					cElement.className = 'ng-binding';
					var indexF = favs.indexOf(foodId);
					favs.splice(indexF, 1);
				}
				localStorage.setItem('favorites', JSON.stringify(favs));
			});
		}}
	};
}