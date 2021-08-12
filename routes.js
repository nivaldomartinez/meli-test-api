const searchHandler = require('./handlers/searchHandler')
const productDetailHandler = require('./handlers/productDetailHandler')

module.exports = (app) => {
    app.get('/', function (req, res) {
        res.send('MELI-TEST API');
    });

    app.get('/api/items', searchHandler);

    app.get('/api/items/:productId', productDetailHandler)
}