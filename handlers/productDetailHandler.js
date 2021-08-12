const apiRequest = require('../utils/apiRequest');
const mapResponse = require('../utils/mapResponse');

module.exports = async (req, res) => {
    const productId = req.params.productId;
    const options = {
        host: 'api.mercadolibre.com',
        port: 443,
        path: `/items/${productId}`,
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    try {
        const values = await Promise.all(
            [
                apiRequest(options),
                apiRequest({ ...options, path: `/items/${productId}/description` })
            ]
        );

        const [meliProductResponse, meliProductDescriptionResponse] = values;
        const response = mapResponse.mapProductResponse(
            meliProductResponse,
            meliProductDescriptionResponse
        );

        res.status(200).send(response);

    } catch (error) {
        res.status(500).send(error);
    }
}