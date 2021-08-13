const app = require("../server");
const supertest = require("supertest");
const apiItemMock = require("./mocks/apiItem.mock");
const emptyResponseMock = require("./mocks/emptyResponse.mock");
const breadCrumbResponseMock = require("./mocks/breadCrumbResponse.mock");

describe('server test', () => {
    test('GET / should response a presentation response', async () => {
        await supertest(app).get("/")
            .expect(200)
            .then((response) => {
                expect(response.text).toEqual('MELI-TEST API');
            });
    })

    test('GET /api should response an error', async () => {
        await supertest(app).get("/api")
            .expect(400)
            .then((response) => {
                const { text } = response;
                expect(text).toEqual('bad request');
            });
    })

    test('GET /api/items should response a generic response', async () => {
        await supertest(app).get("/api/items")
            .expect(200)
            .then((response) => {
                const { body } = response;

                expect(body).toEqual(emptyResponseMock);

                expect(body.items).toHaveLength(0)
                expect(body.categories).toHaveLength(0)
            });
    })

    test('testing GET /api/items?q=:query', async () => {
        await supertest(app).get("/api/items?q=buzz")
            .expect(200)
            .then((response) => {
                const { body } = response;

                expect(body).toHaveProperty('items');
                expect(body).toHaveProperty('categories');
                expect(body.items.length).toEqual(4);
                expect(body.categories.length).not.toBeGreaterThan(4);
                expect(body.author.name).toBe('MELI');
            });
    })

    test('testing GET /api/items/:productId', async () => {
        await supertest(app).get("/api/items/MLA677054757")
            .expect(200)
            .then((response) => {

                const { body } = response;

                expect(body.item).toEqual(apiItemMock)
                expect(body).toHaveProperty('author');
                expect(body).toHaveProperty('item');
                expect(body.item).toHaveProperty('picture');
            });
    })

    test('testing GET /api/breadcrumb/:categoryId', async () => {
        await supertest(app).get("/api/breadcrumb/MLA3422")
            .expect(200)
            .then((response) => {
                const { body } = response;

                expect(body).toHaveProperty('breadcrumb');
                expect(body).toEqual(breadCrumbResponseMock);
            });
    })
})