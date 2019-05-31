app.controller('ProyectoCtrl', ['$scope', 'MainFactory', '$state', '$sessionStorage', '$localStorage', '$rootScope', '$location', 'NgTableParams', '$filter',
    function ($scope, MainFactory, $state, $sessionStorage, $localStorage, $rootScope, $location, NgTableParams, $filter) {
        console.log('hola');


        $scope.verMAs = function () {
            $state.go('app.product-backlog');
        };

        $scope.agregar = function () {
            $state.go('app.agregar-proyecto');
        };

    }]);