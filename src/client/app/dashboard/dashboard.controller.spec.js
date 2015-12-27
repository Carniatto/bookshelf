/* jshint -W117, -W030 */
describe('DashboardController', function() {
    var controller;
    var books = mockData.getMockBooks();
    var genres = mockData.getMockGenres();
    var categories = mockData.getMockCategories();

    beforeEach(function () {
        bard.appModule('app.dashboard');
        bard.inject('$controller', '$log', '$q', '$rootScope', 'dataservice');
    });

    beforeEach(function () {
        sinon.stub(dataservice, 'getBooks').returns($q.when(books));
        sinon.stub(dataservice, 'getGenres').returns($q.when(genres));
        sinon.stub(dataservice, 'getCategories').returns($q.when(categories));
        controller = $controller('DashboardController');
        $rootScope.$apply();
    });

    bard.verifyNoOutstandingHttpRequests();

    describe('Dashboard controller', function () {
        it('should be created successfully', function () {
            expect(controller).to.be.defined;
        });

        describe('pagination variables', function() {
            it('should have currentPage set to 1', function() {
                expect(controller.currentPage).to.equal(1);
            });

            it('should have pageSize set to 20', function() {
                expect(controller.pageSize).to.equal(10);
            });

        });

        describe('after activate', function() {
            it('should have logged "Activated"', function() {
                expect($log.info.logs).to.match(/Activated/);
            });

            it('should have at least 1 book', function () {
                expect(controller.books).to.have.length.above(0);
            });

            it('should have books count of 5', function () {
                expect(controller.books).to.have.length(3);
            });
        });

        describe('on reset filter', function() {
            it('should reset filters and page', function() {
                controller.currentPage = 10;
                controller.search = 'criteria';
                controller.selectedGenre = ['Arts', 'History'];
                controller.selectedCategory = ['Fiction'];
                controller.resetData();
                expect(controller.currentPage).to.equal(1);
                expect(controller.selectedGenre).to.have.length(0);
                expect(controller.selectedCategory).to.have.length(0);
                expect(controller.search).to.have.length(0);
            });
        });

        describe('on pagination', function() {

            it('should go to next page', function() {
                controller.pageSize = 1;
                controller.goNext();
                expect(controller.currentPage).to.equal(2);
            });

            it('should go to previous page', function() {
                controller.currentPage = 1;
                controller.goPrevious();
                expect(controller.currentPage).to.equal(1);
            });
        });

        describe('on filter', function() {

            it('should filter by author', function() {
                controller.books = mockData.getMockBooks();
                controller.search = 'tol';
                controller.filterData();
                expect(controller.filteredData).to.have.length(1);
            });

            it('should filter by title', function() {
                controller.books = mockData.getMockBooks();
                controller.search = 'lord';
                controller.filterData();
                expect(controller.filteredData).to.have.length(1);
            });

            it('should filter by category', function() {
                controller.books = mockData.getMockBooks();
                controller.selectedCategory = ['Non-Fiction'];
                controller.filterData();
                expect(controller.filteredData).to.have.length(3);
            });

            it('should filter by genre', function() {
                controller.books = mockData.getMockBooks();
                controller.selectedGenre = ['Arts'];
                controller.filterData();
                expect(controller.filteredData).to.have.length(1);
            });
        });
    });
});
