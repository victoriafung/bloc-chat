(function() {
	function Message($firebaseArray, $cookieStore) {
    	var ref = firebase.database().ref().child('messages');
		var message = $firebaseArray(ref);
//		var MsgArray = ref.orderByChild('roomId').equalTo('-KV8yH2w97O3PbhPmolL')
		
		
	  	return{
			getByRoomId: function (roomId) {
				return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId)); 
			},					

			send: function(newMessage, roomId) {
				//send method logic
				message.$add({
					username: $cookieStore.get('blocChatCurrentUser'),
					content: newMessage,
					sentAt: firebase.database.ServerValue.TIMESTAMP,
					roomId: roomId
					});
			}, 
		
			all: message
		};
	}
	
	angular
		.module('blocChat')
		.factory('Message', ['$firebaseArray', '$cookieStore', Message]);
})();