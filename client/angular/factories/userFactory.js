app.factory('userFactory', ['$http', function($http){
	function UserFactory(){
		this.login =  function(user, password, callback){
			var object = {user:user, password:password}
			$http.post('/name', object).then(function(retuned_data){
				callback(retuned_data)
			})
		}
		this.register = function(user, password, callback){
			var object = {user:user, password:password}
			$http.post('/register', object).then(function(retuned_data){
				callback(retuned_data)
			})
		}
		this.set_name = function(callback){
			$http.get('/clear_name').then(function(returned_data){
				callback(returned_data)
			})
		}
	}
	return new UserFactory();
}]);