restaurantApp.directive("createBurger", function() {
	return {
		templateUrl: "/directives/templates/createBurger.html",
		restrict: "AECM",
		replace: true
	};
});