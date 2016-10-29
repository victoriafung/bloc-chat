(function() {
	function ModalInstanceCtrl($uibModalInstance, $scope, Room) {
		
		$scope.createRoom = function(name) {
			Room.createRoom();
			$uibModalInstance.dismiss('Cancel');
		};

		$scope.cancel = function () {
			$uibModalInstance.close();
		}; 
		
		$scope.createUser = function(username) {
			
		}
	};
	
angular
.module('blocChat')
.controller('ModalInstanceCtrl', ['$uibModalInstance','$scope', 'Room', ModalInstanceCtrl])

})();
  
  