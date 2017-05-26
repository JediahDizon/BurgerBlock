restaurantApp.controller("createBurgerController", ["$scope", "$window", "orderManager", function($scope, $window, orderManager) {
	$scope.form = {};
	$scope.form.vegetables = {
		cheese: false,
		lettuce: false,
		tomato: false
	};
	$scope.form.sauces = {
		ketchup: false,
		mustard: false,
		oregano: false
	};
	
	$scope.form.protein = "";
	
	$scope.submit = function() {
		var burgerObject = {
			vegetables: $scope.form.vegetables,
			sauces: $scope.form.sauces,
			protein: $scope.form.protein
		};
		
		orderManager.orderItems.push(burgerObject);
		$window.location.href = "#!/cart";
}}]);