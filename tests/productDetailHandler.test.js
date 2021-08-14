const supertest = require("supertest");
const app = require("../server");
jest.mock('../utils/apiRequest', () => ({
    apiRequest: jest.fn(),
}));
const apiRequest = require("../utils/apiRequest")
const meliProductDetailResponseMock = require("./mocks/meliProductDetailResponse.mock");
const meliProductDescriptionResponseMock = require("./mocks/meliProductDescriptionResponse.mock");

const url = '/api/items/MLA677054757';

describe("testing productDetailHandler", () => {
    test('should response 500 if requestApi fails', async () => {
        jest.spyOn(apiRequest, 'apiRequest').mockRejectedValue({})

        await supertest(app).get(url).expect(500)
    });
});