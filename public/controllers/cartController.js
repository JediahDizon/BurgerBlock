restaurantApp.controller("cartController", ["$scope", "orderManager", function($scope, orderManager) {
	$scope.orderItems = orderManager.orderItems;
	$scope.orderedItems = orderManager.getOrders();
	
	console.log($scope.orderedItems);
	
	$scope.placeOrder = function() {
		orderManager.placeOrder();
	}
}]);