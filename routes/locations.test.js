import request from 'supertest';
import app from '../app.js';

const expectedLocation = {
    "location_id": expect.any(Number),
    "location_name": expect.any(String),
    "street": expect.any(String),
    "town": expect.any(String),
    "region": expect.any(String),
    "postcode": expect.any(String),
    "location_description": expect.any(String),
    "image_url": expect.any(String),
    "latitude": expect.any(String),
    "longitude": expect.any(String),
    "categories": expect.any(Array),
    "amenities": expect.any(Array)
}

describe("GET /locations", () => {
    test(`
        Sends a GET request to /locations with no parameters
        Checks if the response's HTTP status code is 200
        Checks if the response's body is an object with the structure: { success: true, payload: array }
        Checks if every item in the payload array is an object with the structure expectedLocation
        `, async () => {
            const response = await request(app).get("/locations").expect(200);
            expect(response.body).toStrictEqual({ success: true, payload: expect.any(Array) });
            response.body.payload.forEach(location => {
                expect(location).toStrictEqual(expectedLocation);
            });
        }
    );
});

describe("GET /locations/:id", () => {
    test(`
        Sends a GET request to /locations/1
        Checks if the response's HTTP status code is 200
        Checks if the response's body is an object with the structure: { success: true, payload: [{ location }] }
        Checks if the location object has the structure expectedLocation
        `, async () => {
            const response = await request(app).get("/locations/1").expect(200);
            expect(response.body).toStrictEqual({ success: true, payload: expect.any(Array) });
            expect(response.body.payload.length).toBe(1);
            expect(response.body.payload[0]).toStrictEqual(expectedLocation);
        }
    );

    test(`
        Sends a GET request to /locations/10000
        Checks if the response's HTTP status code is 404
        Checks if the response's body is an object with the structure: { message: "No location found with that id." }
        `, async () => {
            const response = await request(app).get("/locations/10000").expect(404);
            expect(response.body).toStrictEqual({ message: expect.any(String) });
            expect(response.body.message).toBe("No location found with that id.");
        }
    );

    test(`
        Sends a GET request to /locations/a
        Checks if the response's HTTP status code is 400
        Checks if the response's body is an object with the structure: { message: "Endpoint must be an integer." }
        `, async () => {
            const response = await request(app).get("/locations/a").expect(400);
            expect(response.body).toStrictEqual({ message: expect.any(String) });
            expect(response.body.message).toBe("Endpoint must be an integer.");
        }
    );
})

describe("POST /locations", () => {
    test(`
        Sends a GET request to /locations/1
        Checks if the response's HTTP status code is 200
        Checks if the response's body is an object with the structure: { success: true, payload: [{ location }] }
        Checks if the location object has the structure expectedLocation
        `, async () => {
            const response = await request(app).get("/locations/1").expect(200);
            expect(response.body).toStrictEqual({ success: true, payload: expect.any(Array) });
            expect(response.body.payload.length).toBe(1);
            expect(response.body.payload[0]).toStrictEqual(expectedLocation);
        }
    );

    test(`
        Sends a GET request to /locations/10000
        Checks if the response's HTTP status code is 404
        Checks if the response's body is an object with the structure: { message: "No location found with that id." }
        `, async () => {
            const response = await request(app).get("/locations/10000").expect(404);
            expect(response.body).toStrictEqual({ message: expect.any(String) });
            expect(response.body.message).toBe("No location found with that id.");
        }
    );

    test(`
        Sends a GET request to /locations/a
        Checks if the response's HTTP status code is 400
        Checks if the response's body is an object with the structure: { message: "Endpoint must be an integer." }
        `, async () => {
            const response = await request(app).get("/locations/a").expect(400);
            expect(response.body).toStrictEqual({ message: expect.any(String) });
            expect(response.body.message).toBe("Endpoint must be an integer.");
        }
    );
})