/* jshint -W117, -W030 */
describe('fromNowFilter', function() {
    var controller;
    var timestamp = '2003-09-18T01:59:14.918Z';

    beforeEach(function() {
        bard.appModule('app.core');
        bard.inject('$filter', '$rootScope', 'moment');
    });

    beforeEach(function () {
        filter = $filter('fromNow');
        $rootScope.$apply();
    });

    describe('Filter fromNow', function() {
        it('should be created successfully', function () {
            expect(filter).to.be.defined;
        });

        it('should format timestamp', function () {
            var filtered = filter(timestamp);
            var fromNow = moment(timestamp).fromNow();
            expect(filtered).to.equal(fromNow);
        });

    });
});
