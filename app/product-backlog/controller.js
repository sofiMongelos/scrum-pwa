app.controller('ProductBacklogCtrl', ['$scope', 'MainFactory', '$state', '$sessionStorage', '$localStorage', '$rootScope', '$location', 'NgTableParams', '$filter',
    function ($scope, MainFactory, $state, $sessionStorage, $localStorage, $rootScope, $location, NgTableParams, $filter) {
        console.log('hola');


        $scope.verMAs = function () {
            $state.go('app.historias-usuario');
        };
        $scope.modificar = function () {
            $state.go('app.modificar-usuario');
        };
        $scope.agregar = function () {
            $state.go('app.agregar-usuario');
        };

    }]);