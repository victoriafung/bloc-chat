(function() {
	function Message($firebaseArray) {
    	var ref = firebase.database().ref().child('messages');
		var message = $firebaseArray(ref);
		var MsgArray = ref.orderByChild('roomId').equalTo('-KV8yH2w97O3PbhPmolL')
		
		
	  	return{
			getByRoomId: function (roomId) {
				return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId)); 
			},		
			
//			var newMessage  = {
//				username: "<USERNAME HERE>",
//				content: "<CONTENT OF THE MESSAGE HERE>",
//				sentAt: "<TIME MESSAGE WAS SENT HERE>",
//				roomId: "<ROOM UID HERE>"
//			};
			
			all: message
		};
}
	
	angular
		.module('blocChat')
		.factory('Message', ['$firebaseArray', Message]);
})();