/* jshint -W117, -W030 */
/* jshint multistr:true */
describe('book-card directive: ', function () {
    var element;
    var controller;
    beforeEach(function () {
        bard.appModule('app.widgets');
    });

    beforeEach(inject(function($compile, $rootScope, $templateCache) {

        scope = $rootScope.$new();
        scope.book = mockData.getMockBook();
        $templateCache.put('app/widgets/book-card.html', '<div></div>');

        el = $compile('<book-card book="book" />')(scope);
        scope.$apply();
        controller = el.controller('BookCardController');
    }));

    describe('Book-card directive', function () {
        it('should define the controller', function() {
            expect(controller).to.be.defined;
        });

        it('should not have a empty template', function() {
            expect(el.html()).to.not.equal('');
        });
    });
});
