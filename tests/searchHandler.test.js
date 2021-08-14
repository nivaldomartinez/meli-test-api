const supertest = require("supertest");
const app = require("../server");
jest.mock('../utils/apiRequest', () => ({
    apiRequest: jest.fn(),
}));
const apiRequest = require("../utils/apiRequest");
const meliSearchResponseMock = require("./mocks/meliSearchResponse.mock");

const url = '/api/items?q=buzz';

describe("testing searchHandler", () => {
    test('should response 500 if requestApi fails', async () => {
        jest.spyOn(apiRequest, 'apiRequest').mockRejectedValue({})

        await supertest(app).get(url).expect(500)
    });
});