(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === ' ') {
      $uibModal.open({
        // Modal configuration object properties
		  templateUrl: '/templates/userModal.html',
          controller: 'ModalInstanceCtrl',
          size: 'md'
      })
    } else {
		alert ("Welcome back " + currentUser +"!");
	}
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();