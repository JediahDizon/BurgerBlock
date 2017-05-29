restaurantApp.directive("createBurger", function() {
	return {
		templateUrl: "/directives/templates/createBurger.html",
		restrict: "AECM",
		replace: true
	};
});
restaurantApp.directive("weatherForecast", function() {
	return {
		templateUrl: "/directives/templates/weatherForecast.html",
		restrict: "AECM",
		replace: true
	};
});