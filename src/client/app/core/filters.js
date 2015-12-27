/* global toastr:false, moment:false, _:false*/
(function() {
    'use strict';

    angular
        .module('app.core')
        .filter('fromNow', fromNow);

    fromNow.$inject = ['moment'];
    /* @ngInject */
    function fromNow(moment) {
        return function(input) {
            return moment(input).fromNow();
        };
    }

})();
