(function() {
	function config($stateProvider, $locationProvider) {
		$locationProvider
			.html5Mode({
				enabled: true,
				requireBase: false
		});
		
		$stateProvider
			.state('home', {
				url: '/',	
				controller: 'HomeCtrl as home',
				templateUrl: '/templates/home.html'
			})
			.state('modal', {
				url: '/',
				controller: 'ModalCtrl as modal',
				templateUrl: '/templates/roomModal.html'
			})
			.state('usermodal', {
				url: '/',
				controller: 'ModalCtrl as modal',
				templateUrl: '/templates/userModal.html'
			});
		

	}
	
	angular
	.module('blocChat', ['ui.router', 'firebase', 'ui.bootstrap', 'ngCookies'])
	.config(config);
})();