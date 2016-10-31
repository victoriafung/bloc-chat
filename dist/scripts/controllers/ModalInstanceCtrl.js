(function() {
	function ModalInstanceCtrl($uibModalInstance, $cookieStore, $scope, Room) {
		
		$scope.createRoom = function(name) {
			Room.createRoom();
			$uibModalInstance.dismiss('Cancel');
		};

		$scope.cancel = function () {
			$uibModalInstance.close();
		}; 
		
		$scope.createUser = function(username) {
			$cookieStore.put('blocChatCurrentUser', username);
			$uibModalInstance.dismiss('Cancel');
		};
	};
	
angular
.module('blocChat')
.controller('ModalInstanceCtrl', ['$uibModalInstance', '$cookieStore', '$scope', 'Room', ModalInstanceCtrl])

})();
  
  