(function() {
	function ActiveCtrl($scope, Room, Message) {
		$scope.rooms = Room.all;
		
		$scope.select = function(roomId){
			$scope.activeRoom = $scope.rooms.$getRecord(roomId);
			$scope.messages = Room.messages($scope.activeRoom.name);
  			};
	}
	
	angular
		.module('blocChat')
		.controller('ActiveCtrl', ['$scope', 'Room', 'Message', ActiveCtrl]);
})();