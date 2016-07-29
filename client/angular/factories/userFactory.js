app.factory('userFactory', ['$http', function($http){
	function UserFactory(){
		this.login =  function(user, callback){
			var object = {user:user}
			$http.post('/name', object).then(function(retuned_data){
				callback(retuned_data)
			})
		}
	}
	return new UserFactory();
}]);