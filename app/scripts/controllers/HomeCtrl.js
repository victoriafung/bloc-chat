(function() {
	function HomeCtrl($scope, Room, Message) {
		this.chatRooms = Room.all;
		this.content= Message.all;
		
		$scope.currentRoom = null;
		$scope.messages = null;
		$scope.changeRoom = function(room){
			$scope.currentRoom = room;
			$scope.messages = Message.getByRoomId(room.$id);
		}
	}
	
	angular
	.module('blocChat')
	.controller('HomeCtrl', ['$scope', 'Room', 'Message', HomeCtrl]);
})();