app.controller('userController', ['$scope', '$location', 'userFactory',function($scope, $location, userFactory){
	$scope.login = function(){
		userFactory.login($scope.user, $scope.password, function(sendUser){
			console.log($scope.success)
			$location.url('/logged_in');
		})
		
	}
	$scope.register = function(){
		userFactory.register($scope.reg.name, $scope.reg.password, function(sendUser){
			console.log(sendUser)
			$scope.duplicate = false;
			$scope.correct = false;
			if(sendUser.data.error){
				$scope.duplicate = true;
			}else {
				$scope.correct = true;
			}
		})
	}

}]);