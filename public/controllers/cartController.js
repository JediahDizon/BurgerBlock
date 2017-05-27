restaurantApp.controller("cartController", ["$scope", "$window", "orderManager", function($scope, $window, orderManager) {
	$scope.orderItems = orderManager.orderItems;
	$scope.orderedItems = orderManager.getOrders();
	
	$scope.placeOrder = function() {
		orderManager.placeOrder();
		console.log($scope.orderItems);
		$scope.orderedItems = orderManager.getOrders();
		$("#orderModal").modal();
	};
	
	$scope.removeItem = function(index) {
		orderManager.removeItem(index);
	}
}]);