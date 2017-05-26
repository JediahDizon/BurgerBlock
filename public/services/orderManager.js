restaurantApp.service("orderManager", ["$http", function($http) {
	this.orderItems = [];
	
	this.placeOrder = function() {
		if (typeof(Storage) !== "undefined") {
			for(var i = 0; i < this.orderItems.length; i++) {
				localStorage.setItem(localStorage.length, JSON.stringify(this.orderItems[i]));
			};
			this.orderItems = [];
		} else {
			alert("This browser doesn't support local storage to store orders. Please use an HTML5 compliant browser.");
		}
	}
	
	this.getOrders = function() {
		if (typeof(Storage) !== "undefined") {
			orderedItems = [];
			for(var i = 0; i < localStorage.length; i++) {
				orderedItems.push(localStorage.getItem(localStorage.key(i)));
			}
			orderedItems = orderedItems.map(function(element) {
				return JSON.parse(element);
			});
			return orderedItems;
		} else {
			alert("This browser doesn't support local storage to store orders. Please use an HTML5 compliant browser.");
		}
	}
}]);