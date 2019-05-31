var app = angular.module('ng-scrum', ['ui.router', 'ngTable', 'ngStorage', 'ngBootbox', 'ngMaterial', 'ngMessages'])
    .config(function ($stateProvider, $httpProvider, $urlRouterProvider, $qProvider) {
        $stateProvider
            .state('login', {
                url: '/login',
                cache: false,
                templateUrl: 'app/login/view.html',
                controller: 'LoginCtrl',
                module: 'public'
            })
            .state('app', {
                url: '/app',
                cache: false,
                abstract: true,
                templateUrl: 'app/menu/menu.html',
                controller: 'MenuCtrl',
                module: 'private'
            })
            .state('app.inicio', {
                url: '/inicio',
                templateUrl: 'app/inicio/inicio.html',
                controller: 'InicioCtrl',
                module: 'private'
            })
            .state('app.administracion', {
                url: '/administracion',
                templateUrl: 'app/administrador/view.html',
                controller: 'AdministracionCtrl',
                module: 'private'
            })
            .state('app.usuario', {
                url: '/usuario',
                templateUrl: 'app/usuario/view.html',
                controller: 'UsuarioCtrl',
                module: 'private'
            })
            .state('app.modificar-usuario', {
                url: '/modificar-usuario',
                templateUrl: 'app/usuario/modificar/view.html',
                controller: 'ModificarUsuarioCtrl',
                module: 'private'
            })            
            .state('app.proyecto', {
                url: '/proyecto',
                templateUrl: 'app/proyecto/view.html',
                controller: 'ProyectoCtrl',
                module: 'private'
            })           
            .state('app.modificar-proyecto', {
                url: '/modificar-proyecto',
                templateUrl: 'app/proyecto/modificar/view.html',
                controller: 'ModificarProyectoCtrl',
                module: 'private'
            })          
            .state('app.agregar-proyecto', {
                url: '/agregar-proyecto',
                templateUrl: 'app/proyecto/agregar/view.html',
                controller: 'AgregarProyectoCtrl',
                module: 'private'
            })         
            .state('app.agregar-usuario', {
                url: '/agregar-usuario',
                templateUrl: 'app/usuario/agregar/view.html',
                controller: 'AgregarUsuarioCtrl',
                module: 'private'
            })            
            .state('app.historias-usuario', {
                url: '/historias-usuario',
                templateUrl: 'app/historias_usuario/view.html',
                controller: 'HistoriaUsuarioCtrl',
                module: 'private'
            })             
            .state('app.agregar-history-usuario', {
                url: '/agregar-history-usuario',
                templateUrl: 'app/historias_usuario/agregar/view.html',
                controller: 'AgregarHistoryUsuarioCtrl',
                module: 'private'
            })        
            .state('app.modificar-history-usuario', {
                url: '/modificar-history-usuario',
                templateUrl: 'app/historias_usuario/modificar/view.html',
                controller: 'ModificarHistoryUsuarioCtrl',
                module: 'private'
            })        
            .state('app.product-backlog', {
                url: '/product-backlog',
                templateUrl: 'app/product-backlog/view.html',
                controller: 'ProductBacklogCtrl',
                module: 'private'
            })      
            .state('app.sprint-backlog', {
                url: '/sprint-backlog',
                templateUrl: 'app/sprintBacklog/view.html',
                controller: 'SprintBacklogCtrl',
                module: 'private'
            })
            ;

        $urlRouterProvider.otherwise('/login');
        $qProvider.errorOnUnhandledRejections(false);


        //            var sessionInterceptor = ['$location', '$rootScope', '$injector', function ($location, $rootScope, $injector) {
        //                    return {
        //                        'response': function (resp) {
        //                            $rootScope.valor = $location.path();
        //                            if (resp.status == 401) {
        //                                $.ajax({
        //                                    type: 'POST',
        //                                    url: contexto + '/rest/sesion/cerrar',
        //                                    success: function (data) {
        //                                        console.log(data);
        //                                        window.location.href = '#login';
        //                                        window.location.reload();
        //                                    }
        //                                });
        //                            }
        //                            ;
        //                            return resp;
        //                        },
        //                        'responseError': function (resp) {
        //                            if (resp.status == 401) {
        //                                $.ajax({
        //                                    type: 'POST',
        //                                    url: contexto + '/rest/sesion/cerrar',
        //                                    success: function (data) {
        //                                        console.log(data);
        //                                        window.location.href = '#login';
        //                                        window.location.reload();
        //                                    }
        //                                });
        //                            }
        //                            ;
        //                            return resp;
        //                        }
        //                    };
        //                }];
        //
        //            $httpProvider.interceptors.push(sessionInterceptor);

    });

