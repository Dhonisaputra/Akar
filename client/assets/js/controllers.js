// var app = angular.module("generator", []);

window.app
.controller('workplaceCont', function($scope) {

})
.controller('new_project', function($scope){
	$scope.create_project = function() {
        var data = $scope.data_project;
        window.socket.emit('Project/create', data, function(data){
        	console.log(data)
        	Snackbar.show('Project created')
        })
    };
});


window.app.controller('material_source', function($scope) {
	var ms = this;

	ms.toggle_handle = function(){
		$(".userPanel").toggleClass("width200px width45px");
	}
});
    