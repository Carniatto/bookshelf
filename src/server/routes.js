var router = require('express').Router();
var four0four = require('./utils/404')();
var _ = require('lodash');
var data = require('./books');

router.get('/books', getBooks);
router.get('/book/:id', getBook);
router.get('/genres', getGenres);
router.get('/categories', getCategories);
router.get('/related/:id', getRelatedBooks);
router.get('/*', four0four.notFoundMiddleware);

module.exports = router;

//////////////

function getBooks(req, res, next) {
    res.status(200).send(data);
}

function getBook(req, res, next) {
    var id = _.isUndefined(req.params.id) ? 0 : req.params.id;
    var book = _.findWhere(data, {'id': id});

    if (book) {
        res.status(200).send(book);
    } else {
        four0four.send404(req, res, 'book ' + id + ' not found');
    }
}

function getGenres(req, res, next) {
    var genres = _.chain(data)
                 .pluck('genre')
                 .pluck('name')
                 .unique()
                 .value();
    res.status(200).send(genres);
}

function getCategories(req, res, next) {
    var categories = _.chain(data)
                      .pluck('genre')
                      .pluck('category')
                      .unique()
                      .value();
    res.status(200).send(categories);
}

function getRelatedBooks(req, res, next) {
    var id = _.isUndefined(req.params.id) ? 0 : req.params.id;
    var book = _.findWhere(data, {'id': id});

    if (book) {
        var related = _.chain(data)
                       .reject({'id':id})
                       .where({'genre':book.genre})
                       .take(3)
                       .value();
        res.status(200).send(related);
    } else {
        four0four.send404(req, res, 'book ' + id + ' not found');
    }
}
