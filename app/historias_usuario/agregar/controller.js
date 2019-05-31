app.controller('AgregarHistoryUsuarioCtrl', ['$scope', 'MainFactory', '$state', '$sessionStorage', '$localStorage', '$rootScope', '$location', 'NgTableParams', '$filter',
    function ($scope, MainFactory, $state, $sessionStorage, $localStorage, $rootScope, $location, NgTableParams, $filter) {
        console.log('hola');

        $scope.cancelar = function () {
            $state.go('app.historias-usuario');
        };
    }]);