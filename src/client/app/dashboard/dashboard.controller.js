(function () {
    'use strict';

    angular
        .module('app.dashboard')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['$q', 'dataservice', 'logger', 'moment', '_', '$window'];
    /**
    * @ngdoc cotroller
    * @name DashboardController
    * @description
    *   Responsible for the dashboard view. There the book catalog
    * is preseted
    */
    /* @ngInject */
    function DashboardController($q, dataservice, logger, moment, _, $window) {
        var vm = this;
        vm.genres = [];
        vm.categories = [];
        vm.filteredData = [];
        vm.books = [];
        vm.page = [];
        vm.selectedGenre = [];
        vm.selectedCategory = [];
        vm.search = '';
        vm.filterData = filterData;
        vm.resetData = resetData;

        // pagination variable and functions
        vm.pageSize = 10;
        vm.currentPage = 1;
        vm.goNext = goNext;
        vm.goPrevious = goPrevious;

        activate();

        /**
        * handles the promises needed for the view.
        * @memberof DashboardController
        * @returns {Promise} overall promise chain
        */
        function activate() {
            var promises = [getGenres(), getCategories(), getBooks()];
            return $q.all(promises).then(function() {
                logger.info('Activated Dashboard View');
            });
        }

        /**
        * retrieves through dataservice the genre list.
        * @memberof DashboardController
        * @returns {Promise} promise for genre request
        */
        function getGenres() {
            return dataservice.getGenres().then(function (data) {
                vm.genres = data;
                return vm.genres;
            });
        }

        /**
        * retrieves through dataservice the category list.
        * @memberof DashboardController
        * @returns {Promise} promise for category request
        */
        function getCategories() {
            return dataservice.getCategories().then(function (data) {
                vm.categories = data;
                return vm.categories;
            });
        }

        /**
        * retrieves through dataservice the books list.
        * @memberof DashboardController
        * @returns {Promise} promise for books request
        */
        function getBooks() {
            return dataservice.getBooks().then(function (data) {
                vm.books = data;
                vm.filteredData = data;
                vm.page = getPage(data);
                return vm.filteredData;
            });
        }

        /**
        * resets filtering and pagination data.
        * @memberof DashboardController
        */
        function resetData() {
            vm.selectedGenre = [];
            vm.selectedCategory = [];
            vm.search = '';
            vm.currentPage = 1;
            vm.page = getPage(vm.books);
        }

        /**
        * retrieves through dataservice the category list.
        * @memberof DashboardController
        * @params {Array} data to be paginated
        * @returns {Array} page with books for the current page
        */
        function getPage(data) {
            vm.firstPage = vm.currentPage === 1;
            vm.lastPage = vm.currentPage >= (data.length / vm.pageSize);
            var page = _.take(_.slice(data, vm.pageSize * (vm.currentPage - 1)), vm.pageSize);
            return page;
        }

        /**
        * handles the pagination next page action
        * scrolls to top of the page
        * @memberof DashboardController
        */
        function goNext() {
            var pageCount = vm.filteredData.length / vm.pageSize;
            vm.currentPage = (vm.currentPage < pageCount) ? vm.currentPage + 1 : vm.currentPage;
            vm.page = getPage(vm.filteredData);
            $window.scrollTo(0, 0);
        }

        /**
        * handles the pagination previous page action
        * scrolls to top of the page
        * @memberof DashboardController
        */
        function goPrevious() {
            vm.currentPage = (vm.currentPage > 1) ? vm.currentPage - 1 : vm.currentPage;
            vm.page = getPage(vm.filteredData);
            $window.scrollTo(0, 0);

        }

        /**
        * filters the data based on genre, category, title and author
        * @memberof DashboardController
        */
        function filterData() {
            vm.filteredData = _.filter(vm.books, function (book) {

                var matchTitle = true;
                var matchAuthor = true;
                var matchCategory = true;
                var matchGenre = true;

                if (vm.search) {
                    var searchCriteria = vm.search.toLowerCase();
                    matchTitle  = _.includes(book.name.toLowerCase(), searchCriteria);
                    matchAuthor = _.includes(book.author.name.toLowerCase(), searchCriteria);
                }

                if (vm.selectedGenre.length) {
                    matchGenre = _.includes(vm.selectedGenre, book.genre.name);
                }

                if (vm.selectedCategory.length) {
                    matchCategory = _.includes(vm.selectedCategory, book.genre.category);
                }

                return (matchTitle || matchAuthor) && (matchGenre && matchCategory);
            });
            vm.currentPage = 1;
            vm.page = getPage(vm.filteredData);
        }

    }
})();
