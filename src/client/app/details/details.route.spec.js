/* jshint -W117, -W030 */
describe('details routes', function () {
    describe('state', function () {
        var view = 'app/details/details.html';

        beforeEach(function() {
            module('app.details', bard.fakeToastr);
            bard.inject('$httpBackend', '$location', '$rootScope', '$state', '$templateCache');
        });

        beforeEach(function() {
            $templateCache.put(view, '');
        });

        bard.verifyNoOutstandingHttpRequests();

        it('should map state details to url / ', function() {
            expect($state.href('details', {})).to.equal('/details/');
        });

        it('should map /details route to details View template', function () {
            expect($state.get('details').templateUrl).to.equal(view);
        });

        it('of details should work with $state.go', function () {
            $state.go('details');
            $rootScope.$apply();
            expect($state.is('details'));
        });
    });
});
