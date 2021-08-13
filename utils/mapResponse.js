
const getSeparatedPrice = (originalPrice) => {
    const [price, decimals] = `${originalPrice}`.split('.');

    return [parseInt(price), parseInt(decimals)];
};

module.exports.mapSearchResponse = (meliSearchResponse) => {

    const items = meliSearchResponse.results.map(item => {
        const [price, decimals] = getSeparatedPrice(item.price);
        return {
            id: item.id,
            title: item.title,
            price: {
                currency: item.currency_id,
                amount: parseInt(price | 0),
                decimals: parseInt(decimals | 0)
            },
            picture: item.thumbnail,
            condition: item.condition,
            free_shipping: item.shipping.free_shipping
        };
    });

    const categories = meliSearchResponse.results.map(item => item.category_id);

    return {
        author: {
            name: 'MELI',
            lastname: 'TEST'
        },
        categories,
        items
    };
};

module.exports.mapProductResponse = (meliProductResponse, meliProductDescriptionResponse) => {
    const [price, decimals] = getSeparatedPrice(meliProductResponse.price);
    return {
        author: {
            name: 'MELI',
            lastname: 'TEST'
        },
        item: {
            id: meliProductResponse.id,
            title: meliProductResponse.title,
            price: {
                currency: meliProductResponse.currency_id,
                amount: price,
                decimals: decimals,
            },
            picture: meliProductResponse.pictures[0].url,
            condition: meliProductResponse.condition,
            free_shipping: meliProductResponse.shipping.free_shipping,
            sold_quantity: meliProductResponse.sold_quantity,
            description: meliProductDescriptionResponse.plain_text,
            category_id: meliProductResponse.category_id
        }
    };
};

module.exports.mapCategoriesResponse = (meliCategoriesResponse) => {
    return {
        author: {
            name: 'MELI',
            lastname: 'TEST'
        },
        breadcrumb: meliCategoriesResponse.path_from_root
    };
};

module.exports.getSeparatedPrice = getSeparatedPrice;