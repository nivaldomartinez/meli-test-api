const apiRequest = require('../utils/apiRequest');
const mapResponse = require('../utils/mapResponse');

module.exports = async (req, res) => {
    const query = req.query.q;
    if (query) {
        const options = {
            host: 'api.mercadolibre.com',
            port: 443,
            path: `/sites/MLA/search?q=${query}&limit=4`,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        };

        try {
            const response = await apiRequest(options)
            res.status(200).send(mapResponse.mapSearchResponse(response));
        } catch (error) {
            res.status(500).send(error);
        }
    } else {
        res.status(200).send({
            author: {
                name: 'MELI',
                lastname: 'TEST'
            },
            items: [],
            categories: []
        })
    }
}