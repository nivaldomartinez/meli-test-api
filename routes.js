const searchHandler = require('./handlers/search.handler')
const productDetailHandler = require('./handlers/productDetail.handler');
const breadcrumbHandler = require('./handlers/breadcrumb.handler');

module.exports = (app) => {
    app.get('/', (req, res) => {
        res.status(200).send('MELI-TEST API');
    });

    app.get('/api', (req, res) => {
        res.status(400).send('bad request');
    });

    app.get('/api/items', searchHandler);

    app.get('/api/items/:productId', productDetailHandler)

    app.get('/api/breadcrumb/:categoryId', breadcrumbHandler);
}