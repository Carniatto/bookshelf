var router = require('express').Router();
var four0four = require('./utils/404')();
var _ = require('lodash');
var data = require('./books');

router.get('/books', getBooks);
router.get('/book/:id', getBook);
router.get('/*', four0four.notFoundMiddleware);

module.exports = router;

//////////////

function getBooks(req, res, next) {
    res.status(200).send(data);
}

function getBook(req, res, next) {
    var id = +req.params.id;
    var book = _.findWhere(data, {'id': id});

    if (book) {
        res.status(200).send(book);
    } else {
        four0four.send404(req, res, 'book ' + id + ' not found');
    }
}
