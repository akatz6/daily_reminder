app.controller('todoController', ['$scope', '$location', 'todoFactory',function($scope, $location, todoFactory){
	$scope.submit = function(){
		$scope.correct = false;
		$scope.incorrect = false;
		todoFactory.submit($scope.todo, function(returned_data){
			if(returned_data.data.success){
				$scope.correct = true;
				$scope.incorrect = false;
				$scope.todo.date ="";
				$scope.todo.item ="";
			}else {
				$scope.correct = false;
				$scope.incorrect = true;
			}
		})
	}
}]);