(function() {
    'use strict';

    angular
        .module('app.details')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'details',
                config: {
                    url: '/details/:id',
                    templateUrl: 'app/details/details.html',
                    controller: 'DetailsController',
                    controllerAs: 'vm',
                    title: 'details',
                    settings: {
                        nav: 1,
                        content: '<i class="fa fa-details"></i> Details'
                    }
                }
            }
        ];
    }
})();
