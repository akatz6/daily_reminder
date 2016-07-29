app.factory('updateFactory', ['$http', function($http){
	function UpdateFactory(){
		this.getItem =  function(item, callback){
			var object = {item:item}
			$http.post('/get_item', object).then(function(retuned_data){
				callback(retuned_data)
			})
		}
		this.edit = function(object, callback){
			$http.post('/update_item', object).then(function(retuned_data){
				callback(retuned_data)
			})
		}
	}
	return new UpdateFactory();
}]);