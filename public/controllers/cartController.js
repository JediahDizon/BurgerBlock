restaurantApp.controller("cartController", ["$scope", "$window", "orderManager", function($scope, $window, orderManager) {
	$scope.orderItems = orderManager.orderItems;
	$scope.orderedItems = orderManager.getOrders();
	
	/**
	 * The "PLACE ORDER" function processes the items in the
	 * user's cart by calling the "Oder Manager" service. It then
	 * shows a popup box that states a success message.
	 */
	$scope.placeOrder = function() {
		orderManager.placeOrder();
		$scope.orderedItems = orderManager.getOrders();
		$("#orderModal").modal();
	};
	
	/**
	 * The "REMOVE ITEM" function removes the item
	 * from the user's cart.
	 */
	$scope.removeItem = function(index) {
		orderManager.removeItem(index);
	}
}]);