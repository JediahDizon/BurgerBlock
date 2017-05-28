restaurantApp.controller("createBurgerController", ["$scope", "$window", "orderManager", function($scope, $window, orderManager) {
	
	/**
	 * These data are hard coded in this controller to satisfy requirements.
	 *  
	 * THIS SHOULD NOT BE PRACTICED in real life environment. Normally, the 
	 * burger data should be based off a back-end. Sadly, this is a front-end only
	 * project and no back-end implementation is included to cater to
	 * burger recipe and order management.
	 */
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
	$scope.form.pop = "";
	$scope.form.side = "";
	
	/**
	 * The "SUBMIT" function creates a burger object based off of the
	 * user's choices and passes it to the "Order Manager" service. The
	 * user is then redirected to their cart.
	 */
	$scope.submit = function() {
		var burgerObject = {
			vegetables: $scope.form.vegetables,
			sauces: $scope.form.sauces,
			protein: $scope.form.protein,
			pop: $scope.form.pop,
			side: $scope.form.side
		};
		
		orderManager.addItem(burgerObject);
		$window.location.href = "#!/cart";
}}]);