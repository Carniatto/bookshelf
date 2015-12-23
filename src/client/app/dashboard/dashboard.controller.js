(function () {
    'use strict';

    angular
        .module('app.dashboard')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['$q', 'dataservice', 'logger', 'moment', '_'];
    /* @ngInject */
    function DashboardController($q, dataservice, logger, moment, _) {
        var vm = this;
        vm.news = {
            title: 'bookshelf',
            description: 'Hot Towel Angular is a SPA template for Angular developers.'
        };
        vm.messageCount = 0;
        vm.books = [];
        vm.title = 'Dashboard';

        activate();

        function activate() {
            var promises = [getMessageCount(), getBooks()];
            return $q.all(promises).then(function() {
                logger.info('Activated Dashboard View');
            });
        }

        function getMessageCount() {
            return dataservice.getMessageCount().then(function (data) {
                vm.messageCount = data;
                return vm.messageCount;
            });
        }

        function getBooks() {
            return dataservice.getBooks().then(function (data) {
                vm.books = data;
                _.map(data, function (book) {
                    book.relativePublished = moment(book.published).fromNow();
                });
                return vm.books;
            });
        }

    }
})();
