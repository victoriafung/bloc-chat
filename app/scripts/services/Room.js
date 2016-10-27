(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref().child('rooms');
    var rooms = $firebaseArray(ref);

    return {
    	all: rooms,
	  	createRoom: function(name) {
//		  var name = confirm("create new room?");
//		  if (name == true) {
//		  	console.log(ref);
			rooms.$add(name);
//		  	rooms.$save();	
//		  $uibModalInstance.close('cancel');
	  		} 

    };

}

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();