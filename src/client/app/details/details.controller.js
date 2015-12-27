(function () {
    'use strict';

    angular
        .module('app.details')
        .controller('DetailsController', DetailsController);

    DetailsController.$inject = ['$q', 'dataservice', 'logger', 'moment', '$stateParams'];

    /**
    * @ngdoc cotroller
    * @name DetailsController
    * @description
    *   Responsible for the deatails view. There the book details
    * are preseted
    */
    /* @ngInject */
    function DetailsController($q, dataservice, logger, moment, $stateParams) {
        var vm = this;
        vm.id = $stateParams.id;
        vm.book = {};
        vm.related = {};

        activate();

        /**
        * handles the promises needed for the view.
        * @memberof DetailsController
        * @returns {Promise} overall promise chain
        */
        function activate() {
            var promises = [getBook(), getRelatedBooks()];
            return $q.all(promises).then(function() {
                logger.info('Activated Details View');
            });
        }

        /**
        * retrieves through dataservice related book list.
        * @memberof DetailsController
        * @returns {Promise} overall promise chain
        */
        function getRelatedBooks() {
            return dataservice.getRelatedBooks(vm.id).then(function (data) {
                vm.related = data;
                return vm.related;
            });
        }

        /**
        * retrieves through dataservice book details.
        * @memberof DetailsController
        * @returns {Promise} overall promise chain
        */
        function getBook() {
            return dataservice.getBook(vm.id).then(function (data) {
                vm.book = data;
                return vm.book;
            });
        }

    }
})();
