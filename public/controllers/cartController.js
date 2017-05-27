restaurantApp.controller("cartController", ["$scope", "$window", "orderManager", function($scope, $window, orderManager) {
	$scope.orderItems = orderManager.orderItems;
	$scope.orderedItems = orderManager.getOrders();
	
	console.log($scope.orderedItems);
	
	$scope.placeOrder = function() {
		orderManager.placeOrder();
		$scope.orderItems = orderManager.orderItems;
		$scope.orderedItems = orderManager.getOrders();
	}
}]);