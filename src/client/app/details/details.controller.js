(function () {
    'use strict';

    angular
        .module('app.details')
        .controller('DetailsController', DetailsController);

    DetailsController.$inject = ['$q', 'dataservice', 'logger', 'moment', '$stateParams'];
    /* @ngInject */
    function DetailsController($q, dataservice, logger, moment, $stateParams) {
        var vm = this;
        vm.id = $stateParams.id;
        vm.book = {};
        vm.related = {};

        activate();

        function activate() {
            var promises = [getBook(), getRelatedBooks()];
            return $q.all(promises).then(function() {
                logger.info('Activated Details View');
            });
        }

        function getRelatedBooks() {
            return dataservice.getRelatedBooks(vm.id).then(function (data) {
                vm.related = data;
                return vm.related;
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
