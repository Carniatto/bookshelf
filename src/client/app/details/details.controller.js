(function () {
    'use strict';

    angular
        .module('app.details')
        .controller('DetailsController', DetailsController);

    DetailsController.$inject = ['$q', 'dataservice', 'logger', 'moment', '$stateParams'];
    /* @ngInject */
    function DetailsController($q, dataservice, logger, moment, $stateParams) {
        var vm = this;
        vm.news = {
            title: 'bookshelf',
            description: 'Hot Towel Angular is a SPA template for Angular developers.'
        };
        vm.id = $stateParams.id;
        vm.book = {};
        vm.title = 'Details';

        activate();

        function activate() {
            var promises = [getBook(vm.id)];
            return $q.all(promises).then(function() {
                logger.info('Activated Dashboard View');
            });
        }

        function getBook() {
            return dataservice.getBook(vm.id).then(function (data) {
                vm.book = data;
                return vm.book;
            });
        }

    }
})();
