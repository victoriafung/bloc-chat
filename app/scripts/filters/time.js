(function() {
	function timeparse() {
		return function(seconds){
			return moment.utc(seconds).local().format("ddd, MMM Do YYYY, h:mm:ss a");
			
		};
		
	}
	
	angular
	.module('blocChat')
	.filter('timeparse', timeparse)
})();