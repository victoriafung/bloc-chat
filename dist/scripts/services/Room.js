(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);

    return {
      all: rooms,
	  createRoom: function(name) {
		  ref.$add({name: name});
	  }
    };
	

	}

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();