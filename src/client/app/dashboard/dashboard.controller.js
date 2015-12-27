(function () {
    'use strict';

    angular
        .module('app.dashboard')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['$q', 'dataservice', 'logger', 'moment', '_', '$window'];
    /* @ngInject */
    function DashboardController($q, dataservice, logger, moment, _, $window) {
        var vm = this;
        vm.genres = [];
        vm.categories = [];
        vm.filteredData = [];
        vm.books = [];
        vm.page = [];
        vm.filterData = filterData;
        vm.resetData = resetData;
        vm.pageSize = 10;
        vm.currentPage = 1;
        vm.firstPage = 1;
        vm.lastPage = 1;
        vm.goNext = goNext;
        vm.goPrevious = goPrevious;

        activate();

        function activate() {
            var promises = [getGenres(), getCategories(), getBooks()];
            return $q.all(promises).then(function() {
                logger.info('Activated Dashboard View');
            });
        }

        function getGenres() {
            return dataservice.getGenres().then(function (data) {
                vm.genres = data;
                return vm.genres;
            });
        }

        function getCategories() {
            return dataservice.getCategories().then(function (data) {
                vm.categories = data;
                return vm.categories;
            });
        }

        function getBooks() {
            return dataservice.getBooks().then(function (data) {
                _.map(data, function (book) {
                    book.relativePublished = moment(book.published).fromNow();
                });
                vm.books = data;
                vm.filteredData = data;
                vm.page = getPage(data);
                return vm.filteredData;
            });
        }

        function resetData() {
            delete vm.selectedGenre;
            delete vm.selectedCategory;
            delete vm.search;
            vm.currentPage = 1;
            vm.page = getPage(vm.books);
        }

        function getPage(data) {
            vm.firstPage = vm.currentPage === 1;
            vm.lastPage = vm.currentPage >= (data.length/vm.pageSize);
            var page = _.take(_.slice(data, vm.pageSize*(vm.currentPage-1)), vm.pageSize);
            logger.info('showing ' + (vm.pageSize*(vm.currentPage-1)) + ' to ' + vm.pageSize*vm.currentPage, vm.books)
            return page;
        }

        function goNext() {
            vm.currentPage = (vm.currentPage < vm.filteredData.length/vm.pageSize) ? vm.currentPage+1 : vm.currentPage;
            vm.page = getPage(vm.filteredData);
            $window.scrollTo(0,0);
        }

        function goPrevious() {
            vm.currentPage = (vm.currentPage > 1) ? vm.currentPage-1 : vm.currentPage;
            vm.page = getPage(vm.filteredData);
            $window.scrollTo(0,0);

        }

        function filterData() {
            vm.filteredData = _.filter(vm.books, function (book) {

                var matchTitle = true;
                var matchAuthor = true;
                var matchCategory = true;
                var matchGenre = true;

                if(!_.isUndefined(vm.search) && vm.search.length ){
                    var searchCriteria = vm.search.toLowerCase();
                    matchTitle  = _.includes(book.name.toLowerCase(), searchCriteria);
                    matchAuthor = _.includes(book.author.name.toLowerCase(), searchCriteria);
                }

                if(!_.isUndefined(vm.selectedGenre)){
                    matchGenre = _.includes(vm.selectedGenre, book.genre.name);
                }

                if(!_.isUndefined(vm.selectedCategory)){
                    matchCategory = _.includes(vm.selectedCategory, book.genre.category);
                }

                return (matchTitle || matchAuthor) && (matchGenre && matchCategory);
            });
            vm.currentPage = 1;
            vm.page = getPage(vm.filteredData);
        }

    }
})();
