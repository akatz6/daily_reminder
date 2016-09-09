app.controller('userController', ['$scope', '$location', 'userFactory',function($scope, $location, userFactory){
	index = function(){
		userFactory.set_name(function(returned_data){
		})
	}
	index();
	$scope.login = function(){
		userFactory.login($scope.user, $scope.password, function(sendUser){
			if(!sendUser.data.error){
				$location.url('/logged_in');
			}else {
				$scope.error = true;
			}		
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