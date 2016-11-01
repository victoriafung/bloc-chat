(function() {
	function HomeCtrl($scope, Room, Message) {
		this.chatRooms = Room.all;
		this.content= Message.all;
		
		$scope.currentRoom = null;
		$scope.messages = null;
		$scope.message = null;
		$scope.changeRoom = function(room){
			$scope.currentRoom = room;
			$scope.messages = Message.getByRoomId(room.$id);
		}
		
		$scope.sendMessage = function(){
			Message.send($scope.message, $scope.currentRoom.$id);
			$scope.message = null;
		}
	}
	
	angular
	.module('blocChat')
	.controller('HomeCtrl', ['$scope', 'Room', 'Message', HomeCtrl]);
})();