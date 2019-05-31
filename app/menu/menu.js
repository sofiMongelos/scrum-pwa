app.factory('MenuFactory', function ($http) {
});

app.controller('MenuCtrl', function ($scope, $state, $localStorage, $rootScope) {

    $rootScope.$on('$stateChangeStart', function (e, toState, toParams, fromState, fromParams) {
        if (toState.module === 'private' && !$localStorage.logueado) {
            e.preventDefault();
            $state.go('login');
        }
    });



    $scope.salir = function () {
        //console.log('hola');
        //$state.go('login');
    };
});