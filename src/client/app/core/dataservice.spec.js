/* jshint -W117, -W030 */
describe('core dataservice', function () {

    var $httpFlush;

    beforeEach(function () {
        module('app.core');
        bard.inject(this, '$httpBackend', '$rootScope', 'dataservice');
        $httpFlush = $httpBackend.flush;
    });

    bard.verifyNoOutstandingHttpRequests();

    it('should be registered', function() {
        expect(dataservice).to.defined;
    });

    describe('when call getBooks', function () {
        var books;
        beforeEach(function() {
            books = mockData.getMockBooks();
            $httpBackend.when('GET', '/api/books')
                        .respond(200, books);
        });

        it('should return books', function () {
            dataservice.getBooks()
                .then(function(data) {
                    expect(data.length).to.equal(books.length);
                });
            $httpFlush();
        });

        it('should contain "The Lord of the Rings"', function () {
            dataservice.getBooks()
                .then(function(data) {
                    var hasLOTR = data.some(function (b) {
                        return b.name.indexOf('The Lord of the Rings') > -1;
                    });
                    expect(hasLOTR).to.be.true;
                });
            $httpFlush();
        });
    });

    describe('when call getGenres', function () {
        var genres;
        beforeEach(function() {
            genres = mockData.getMockGenres();
            $httpBackend.when('GET', '/api/genres')
                        .respond(200, genres);
        });

        it('should return genres', function () {
            dataservice.getGenres()
                .then(function(data) {
                    expect(data.length).to.equal(genres.length);
                });
            $httpFlush();
        });

        it('should contain "Arts"', function () {
            dataservice.getGenres()
                .then(function(data) {
                    var hasArts = data.some(function (g) {
                        return g.indexOf('Arts') > -1;
                    });
                    expect(hasArts).to.be.true;
                });
            $httpFlush();
        });
    });

    describe('when call getCategories', function () {
        var categories;
        beforeEach(function() {
            categories = mockData.getMockCategories();
            $httpBackend.when('GET', '/api/categories')
                        .respond(200, categories);
        });

        it('should return genres', function () {
            dataservice.getCategories()
                .then(function(data) {
                    expect(data.length).to.equal(categories.length);
                });
            $httpFlush();
        });

        it('should contain "Fiction"', function () {
            dataservice.getCategories()
                .then(function(data) {
                    var hasFiction = data.some(function (c) {
                        return c.indexOf('Fiction') > -1;
                    });
                    expect(hasFiction).to.be.true;
                });
            $httpFlush();
        });
    });

    describe('when call getbook to "The Lord of The Rings"', function () {
        var book;
        var bookId = 'b841267346';
        beforeEach(function() {
            book = mockData.getMockBook();
            $httpBackend.when('GET', '/api/book/' + bookId)
                        .respond(200, book);
        });

        it('should return book', function () {
            dataservice.getBook(bookId)
                .then(function(data) {
                    expect(data.id).to.equal(book.id);
                });
            $httpFlush();
        });
    });

    describe('when call getRelated to "The Lord of The Rings"', function () {
        var relatedBooks;
        var bookId = 'b841267346';
        beforeEach(function() {
            relatedBooks = mockData.getMockRelated();
            $httpBackend.when('GET', '/api/related/' + bookId)
                        .respond(200, relatedBooks);
        });

        it('should return relatedBooks', function () {
            dataservice.getRelatedBooks(bookId)
                .then(function(data) {
                    expect(data.length).to.equal(relatedBooks.length);
                });
            $httpFlush();
        });

        it('should return 3 relatedBooks', function () {
            dataservice.getRelatedBooks(bookId)
                .then(function(data) {
                    expect(data.length).to.equal(3);
                });
            $httpFlush();
        });

        it('should not return the reference book', function () {
            dataservice.getRelatedBooks(bookId)
                .then(function(data) {
                    data = _.pluck(data, 'name');
                    expect(data).to.not.include('Lord of The Rings');
                });
            $httpFlush();
        });
    });

});
