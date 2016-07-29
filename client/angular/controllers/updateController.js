app.controller('updateController', ['$scope', '$location', 'updateFactory', '$routeParams', function($scope, $location, updateFactory, $routeParams){
	var index = function(){
		updateFactory.getItem($routeParams, function(return_data){
			console.log(return_data.data.item)
			$scope.item = return_data.data.item.item
			$scope.date = new Date(return_data.data.item.date)
			$scope.id = return_data.data.item._id
		})
	}
	index();
	
	$scope.submit = function(){
		var object = {id:$scope.id, item:$scope.item, date:$scope.date}
		updateFactory.edit(object , function(sendUser){
			console.log(sendUser)
			$location.url('/logged_in');
		})
	}
}]);