app.controller('todoController', ['$scope', '$location', 'todoFactory',function($scope, $location, todoFactory){
	$scope.submit = function(){
		
		todoFactory.submit($scope.todo, function(returned_data){
			$scope.correct = false;
			$scope.incorrect = false;
			$scope.early = false;
			$scope.to_small = false;
			var date = new Date()
			date.setHours(0,0,0,0)
			if($scope.todo.date < date){
				$scope.early = true
			} else if($scope.todo.item.length < 5){
				$scope.to_small = true
			} 
			else {
				if(returned_data.data.success){
					$scope.correct = true;
					$scope.incorrect = false;
					$scope.todo.date ="";
					$scope.todo.item ="";
				}else {
					$scope.correct = false;
					$scope.incorrect = true;
				}
			}
			
		})		
	}
	$scope.return  = function(){
		$location.url('/logged_in')
	}
}]);