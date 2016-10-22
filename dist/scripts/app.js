(function() {
	function config($stateProvider, $locationProvider) {
		$locationProvider
		.html5Mode({
			enables: true,
			requireBase: false
		});
		
		$stateProvider
			.state('home', {
				url:'/home',
				templateUrl: '/templates/home.html'
			})
	}
	
	
	
	
	angular
	.module('blocChat', ["firebase"], ['ui.router'])
	.config(config);


})();

