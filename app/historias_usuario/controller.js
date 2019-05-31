app.controller('HistoriaUsuarioCtrl', ['$scope', 'MainFactory', '$state', '$sessionStorage', '$localStorage', '$rootScope', '$location', 'NgTableParams', '$filter',
    function ($scope, MainFactory, $state, $sessionStorage, $localStorage, $rootScope, $location, NgTableParams, $filter) {
        console.log('hola');


        $scope.modificar = function () {
            $state.go('app.modificar-history-usuario');
        };
        $scope.agregar = function () {
            $state.go('app.agregar-history-usuario');
        };

    }]);