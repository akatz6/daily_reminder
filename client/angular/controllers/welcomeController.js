app.controller('welcomeController', ['$scope', '$location', 'welcomeFactory',function($scope, $location, welcomeFactory){
	index = function(){
		welcomeFactory.get_name(function(returned_data){
			$scope.name = returned_data.data.user
			})
	}
	date = function(){
		welcomeFactory.get_name(function(returned_data){
			var today = new Date;
			$scope.today = today.toDateString();
			})
	}
	get_todo = function(){
		welcomeFactory.get_all(function(returned_data){
			$scope.lists = returned_data.data.user
			console.log($scope.lists)
		})
	}
	index();
	date();
	get_todo();
	$scope.getFile = function () {
		fileReader.readAsDataUrl($scope.file, $scope)
		.then(function(result) {
			$scope.imageSrc = result;
		});
	}

	$scope.add_todo = function(){
		$location.url('/todo')
	}
	$scope.delete = function(id){
		welcomeFactory.deleteOne(id, function(returned_data){
			console.log(returned_data)
			index();
			date();
			get_todo();
		})
	}
	$scope.update = function(id){
		$location.url('/update/' +id)
	}
}]);