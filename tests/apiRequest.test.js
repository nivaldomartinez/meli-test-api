const { expect } = require("@jest/globals");
const apiRequest = require("../utils/apiRequest");
const apiResponseMock = require("./mocks/apiResponse.mock");

describe("testing api request", () => {

    test("apRequest should return a promise with api response", async () => {
        const options = {
            host: 'jsonplaceholder.typicode.com',
            port: 443,
            path: `/users/1`,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const response = await apiRequest(options);
        expect(response).toEqual(apiResponseMock);
    })

    test("apRequest should return a promise with error if the options are wrong", async () => {
        const options = {
            host: 'jsonp.typicode.com',
            port: 443,
            path: `/userswrong/1`,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        };

        try {
            await apiRequest(options);
        } catch (error) {
            expect(error).toBeTruthy();
        }
    })
})