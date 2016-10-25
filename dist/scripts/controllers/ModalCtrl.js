(function() {
	function ModalCtrl($uibModal, $scope, Room) {
		$scope.createRoom = function(name){
			//create room function
			Room.createRoom(name);
		
		};
		
		$scope.open = function() {
			//open modal
		};
		
		$scope.close = function () {
			//close modal
		};
		
		$scope.submit = function () {
			//when user clicks submit data to firebase
		};
	}

angular
.module('blocChat')
.controller('ModalCtrl', ModalCtrl)

})();