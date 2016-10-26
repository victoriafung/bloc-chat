(function() {
	function ModalInstanceCtrl($uibModalInstance, $scope, Room) {
		
		$scope.createRoom = function(name) {
			Room.createRoom(name);
			
		};

		$scope.cancel = function () {
		$uibModalInstance.close('Cancel');
		}; 
	};
	
angular
.module('blocChat')
.controller('ModalInstanceCtrl', ['$uibModalInstance','$scope', 'Room', ModalInstanceCtrl])

})();
  
  