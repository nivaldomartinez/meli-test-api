const apiRequest = require('../utils/apiRequest');
const mapResponse = require('../utils/mapResponse');

module.exports = async (req, res) => {
    const categoryId = req.params.categoryId;
    const options = {
        host: 'api.mercadolibre.com',
        port: 443,
        path: `/categories/${categoryId}`,
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    try {
        const meliCategoriesResponse = await apiRequest(options)
        res.status(200).send(mapResponse.mapCategoriesResponse(
            meliCategoriesResponse
        ));

    } catch (error) {
        res.status(500).send(error);
    }
}