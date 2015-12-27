(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('dataservice', dataservice);

    dataservice.$inject = ['$http', '$q', 'exception', 'logger'];
    /* @ngInject */
    function dataservice($http, $q, exception, logger) {
        var service = {
            getBooks: getBooks,
            getBook: getBook,
            getGenres: getGenres,
            getCategories: getCategories
        };

        return service;

        function getMessageCount() { return $q.when(72); }

        function getBooks() {
            return $http.get('/api/books')
                .then(success)
                .catch(fail);

            function success(response) {
                return response.data;
            }

            function fail(e) {
                return exception.catcher('XHR Failed for getBooks')(e);
            }
        }

        function getBook(id) {
            return $http.get('/api/book/' + id)
                .then(success)
                .catch(fail);

            function success(response) {
                return response.data;
            }

            function fail(e) {
                return exception.catcher('XHR Failed for getBook')(e);
            }
        }

        function getGenres() {
            return $http.get('/api/genres')
                .then(success)
                .catch(fail);

            function success(response) {
                return response.data;
            }

            function fail(e) {
                return exception.catcher('XHR Failed for getGenres')(e);
            }
        }

        function getCategories() {
            return $http.get('/api/categories')
                .then(success)
                .catch(fail);

            function success(response) {
                return response.data;
            }

            function fail(e) {
                return exception.catcher('XHR Failed for getCategories')(e);
            }
        }
    }
})();
