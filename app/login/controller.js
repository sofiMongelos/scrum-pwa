app.controller('LoginCtrl', ['$scope', 'MainFactory', '$state', '$sessionStorage', '$localStorage', '$rootScope', '$location', 'NgTableParams', '$filter',
    function ($scope, MainFactory, $state, $sessionStorage, $localStorage, $rootScope, $location, NgTableParams, $filter) {

        $scope.datos = {};
        $scope.datos.documento = "";
        $scope.datos.pass = "";

        $scope.login = function () {

            var parametros = {
                "user": $scope.datos.documento,//4993849
                "pass": $scope.datos.pass

            }
            var user = 'admin';
            var pass = 'admin1234';

            blockUI();
            if (parametros.user === user){
                if (parametros.pass === pass){
                    $state.go('app.inicio');
                } else{
                    toastr.info ('Contraseña no valida', 'Atención');
                }
            } else {
                toastr.info('El usuario no existe', 'Atención');
            }
           /* MainFactory.login(parametros)
                .then(function (response) {
                    if (response.data.estado === 0) {*/
                       
                        //$state.go('app.cambiarPass');
                   // }
                    unBlockUI();
                    $localStorage.logueado = true;
                    $scope.datos = {};
               /* },
                    function (response) {
                        toastr.info('Ha ocurrido un error, intente nuevamente', 'Atención');
                        unBlockUI();
                    });*/

        };

        $scope.roles = function(){
           
        };

    }]);