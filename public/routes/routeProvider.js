restaurantApp.config(function($routeProvider) {
	$routeProvider
		.when("/", {
			templateUrl: "/pages/home.html",
			controller: "homeController"
		}).when("/home", {
			templateUrl: "/pages/home.html",
			controller: "homeController"
		}).when("/cart", {
			templateUrl: "/pages/cart.html",
				controller: "cartController"
		}).when("/create", {
			templateUrl: "/pages/create.html",
				controller: "createController"
		}).when("/menu", {
			templateUrl: "/pages/menu.html",
				controller: "menuController"
		}).otherwise({
			redirectTo: "/"
	});
});
