app.controller('userController', ['$scope', '$location', 'userFactory',function($scope, $location, userFactory){
	$scope.login = function(){
		userFactory.login($scope.user, function(sendUser){
			$location.url('/logged_in');
		})
	}
}]);