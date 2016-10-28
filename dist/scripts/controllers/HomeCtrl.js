(function() {
	function HomeCtrl(Room, Message) {
		this.chatRooms = Room.all;
		this.content= Message.all;
	}
	
	angular
	.module('blocChat')
	.controller('HomeCtrl', ['Room', 'Message', HomeCtrl]);
})();