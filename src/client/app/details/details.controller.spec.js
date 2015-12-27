/* jshint -W117, -W030 */
describe('DetailsController', function() {
    var controller;
    var book = mockData.getMockBook();
    var relatedBooks = mockData.getMockRelated();

    beforeEach(function () {
        bard.appModule('app.details');
        bard.inject('$controller', '$log', '$q', '$rootScope', 'dataservice');
    });

    beforeEach(function () {
        sinon.stub(dataservice, 'getBook').returns($q.when(book));
        sinon.stub(dataservice, 'getRelatedBooks').returns($q.when(relatedBooks));
        controller = $controller('DetailsController');
        $rootScope.$apply();
    });

    bard.verifyNoOutstandingHttpRequests();

    describe('Details controller', function () {
        it('should be created successfully', function () {
            expect(controller).to.be.defined;
        });

        describe('after activate', function() {
            it('should have logged "Activated"', function() {
                expect($log.info.logs).to.match(/Activated/);
            });

            it('should have at least 1 book', function () {
                expect(controller.book).to.exist;
            });

            it('should have related books count of at least 3', function () {
                expect(controller.related).to.have.length.of.at.most(3);
            });
        });
    });
});
