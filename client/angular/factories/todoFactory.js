app.factory('todoFactory', ['$http', function($http){
	function TodoFactory(){
		this.submit =  function(todo, callback){
			$http.post('/submit', todo).then(function(retuned_data){
				console.log("In factory")
				callback(retuned_data)
			})
		}
	}
	return new TodoFactory();
}]);