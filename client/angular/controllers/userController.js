app.controller('userController', ['$scope', '$location', 'userFactory',function($scope, $location, userFactory){
	$scope.login = function(){
		userFactory.login($scope.user, function(sendUser){
			$scope.name = false;
			try{
				if($scope.user.length > 1){
					$location.url('/logged_in');	
				} 
			}catch(err){
				$scope.name = true;
			}
		})
	}
}]);