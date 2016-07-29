app.factory('welcomeFactory', ['$http', function($http){
	function WelcomeFactory(){
		this.get_name =  function(callback){
			$http.get('/get_name').then(function(retuned_data){
				callback(retuned_data)
			})
		}
		this.get_all = function(callback){
			$http.get('/get_list').then(function(retuned_data){
				callback(retuned_data)
			})
		}
		this.deleteOne = function(id, callback){
			var object = {id:id}
			$http.post('/deleteOne', object).then(function(retuned_data){
				callback(retuned_data)
			})
		}
	}
	return new WelcomeFactory();
}]);