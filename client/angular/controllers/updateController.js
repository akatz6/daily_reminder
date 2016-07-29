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
			$scope.correct = false;
			$scope.incorrect = false;
			$scope.early = false;
			$scope.to_small = false;
			var date = new Date()
			date.setHours(0,0,0,0)
			if($scope.date < date){
				$scope.early = true
			} else if($scope.item.length < 5){
				$scope.to_small = true
			} 
			else {
				if(sendUser.data.success){
					$scope.correct = true;
					$scope.incorrect = false;
					$location.url('/logged_in');
				}else {
					$scope.correct = false;
					$scope.incorrect = true;
				}
			}
			
		})
	}
}]);