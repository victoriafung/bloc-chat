(function() {
    function ModalCtrl($scope, $uibModal) {

        $scope.open = function(){
            var modalInstance = $uibModal.open({
                templateUrl: '/templates/modal.html',
                controller: 'ModalInstanceCtrl',
                size: 'sm', 
                backdrop: 'static' // disables closing of modal by clicking anything but the buttons
            });
			
        };
    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$scope', '$uibModal', ModalCtrl]);
})();