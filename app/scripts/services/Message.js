(function() {
	function Message($firebaseArray) {
    	var ref = firebase.database().ref().child('messages');
		var message = $firebaseArray(ref);
	  	
		return {
			all: message
//			var newMessage  = {
//				username: "<USERNAME HERE>",
//				content: "<CONTENT OF THE MESSAGE HERE>",
//				sentAt: "<TIME MESSAGE WAS SENT HERE>",
//				roomId: "<ROOM UID HERE>"
		};
  }
	
	angular
		.module('blocChat')
		.factory('Message', ['$firebaseArray', Message]);
})();