restaurantApp.service("orderManager", ["$http", function($http) {
	/**
	 * This property contains the orders that the user has
	 * added to their "cart" and will be checked out later.
	 */
	this.orderItems = [];
	
	/**
	 * This "PLACE ORDER" function will place all of the orders that the user
	 * has added to their cart. Since this is a front-end only
	 * project, there is no database persistence associated with
	 * this application, so the only way to save these orders
	 * is to use the HTML5 Local Browser Storage functionality.
	 */
	this.placeOrder = function() {
		if (typeof(Storage) !== "undefined") {
			
			/**
			 * For each of the order items, convert it to an
			 * order object that has a timestamp and append it 
			 * to the local storage of the browser.
			 */
			for(var i = 0; i < this.orderItems.length; i++) {
				this.orderItem = {
					item: this.orderItems[i],
					timestamp: new Date(),
				}
				localStorage.setItem(localStorage.length, JSON.stringify(this.orderItem));
			};
			this.orderItems = [];
		} else {
			alert("This browser doesn't support local storage to store orders. Please use an HTML5 compliant browser.");
		}
	}
	
	/**
	 * This "GET ORDER" function will get all of the orders that the user has placed 
	 * in the past. This will let them see what they have ordered so far as well as 
	 * re-order the same item again.
	 */
	this.getOrders = function() {
		if (typeof(Storage) !== "undefined") {
			/**
			 * For each of the key-value pair in the HTML5 local storage, 
			 * parse it to JSON and make an "ORDER ITEM" object based off
			 * it. Once finished, return the list of all of the ordered items
			 * as a list.
			 */
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