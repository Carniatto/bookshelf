(function() {
    'use strict';

    angular
        .module('app.widgets')
        .directive('bookCard', bookCard);

    /* @ngInject */
    function bookCard () {
        var directive = {
            bindToController: true,
            controller: BookCardController,
            controllerAs: 'vm',
            restrict: 'E',
            scope: {
                'b': '=book'
            },
            templateUrl: 'app/widgets/book-card.html'
        };

        /* @ngInject */
        function BookCardController() {
            var vm = this;
        }

        return directive;
    }
})();
