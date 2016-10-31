(function() {
    function userCtrl($scope, $uibModal) {

        $scope.open = function(){
//            var modalInstance = $uibModal.open({
//                templateUrl: '/templates/userModal.html',
//                controller: 'ModalInstanceCtrl',
//                size: 'sm', 
//                backdrop: 'static' // disables closing of modal by clicking anything but the buttons
            });
		
        };
    }

    angular
        .module('blocChat')
        .controller('userCtrl', ['$scope', '$uibModal', userCtrl]);
})();