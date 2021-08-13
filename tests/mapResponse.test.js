const mapResponse = require("../utils/mapResponse");
const breadCrumbResponseMock = require("./mocks/breadCrumbResponse.mock");
const meliCategoriesResponseMock = require("./mocks/meliCategoriesResponse.mock");
const meliProductDescriptionResponseMock = require("./mocks/meliProductDescriptionResponse.mock");
const meliProductDetailResponseMock = require("./mocks/meliProductDetailResponse.mock");
const meliSearchResponseMock = require("./mocks/meliSearchResponse.mock");

describe("testing mapResponse utility", () => {

    test("search mapped response should have items property", () => {

        const mappedResponse = mapResponse.mapSearchResponse(meliSearchResponseMock);

        expect(mappedResponse).toHaveProperty('items');
        expect(mappedResponse.items).toHaveLength(1);
        expect(mappedResponse.items.length).not.toBeGreaterThan(1);

    })

    test("search mapped response should have categories property", () => {

        const mappedResponse = mapResponse.mapSearchResponse(meliSearchResponseMock);

        expect(mappedResponse).toHaveProperty('categories');
        expect(mappedResponse.categories).toHaveLength(1);

    })

    test("getSeparatedPrice should separate number by (.)", () => {

        const [price, decimals] = mapResponse.getSeparatedPrice(333.87);

        expect(price).toBe(333);
        expect(decimals).toBe(87);

    })

    test('getSeparatedPrice should return decimals as NaN if the input value has no decimals', () => {
        const [price, decimals] = mapResponse.getSeparatedPrice(33300);

        expect(price).toBe(33300);
        expect(decimals).toBeNaN();
    })

    test("detail mapped response should have item property", () => {

        const mappedResponse = mapResponse.mapProductResponse(
            meliProductDetailResponseMock,
            meliProductDescriptionResponseMock
        );

        expect(mappedResponse).toHaveProperty('item');
        expect(mappedResponse).toBeDefined();

    })

    test("product detail mapped response  item properties", () => {

        const mappedResponse = mapResponse.mapProductResponse(
            meliProductDetailResponseMock,
            meliProductDescriptionResponseMock
        );
        const { item } = mappedResponse;
        expect(item).toHaveProperty('picture');
        expect(item).toHaveProperty('price');

    })

    test("categories mapped response  should have breadcrumb property", () => {

        const mappedResponse = mapResponse.mapCategoriesResponse(
            meliCategoriesResponseMock
        );
        expect(mappedResponse).toHaveProperty('breadcrumb');
        expect(mappedResponse).toEqual(breadCrumbResponseMock);

    })


})