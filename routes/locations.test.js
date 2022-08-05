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

const testLocation = {
    location_name: "Test Name 123 !'` ",
    street: "Test Street 123 !'` ",
    town: "Test Town 123 !'` ",
    region: "Test Region 123 !'` ",
    postcode: "Test Postcode 123 !'` ",
    location_description: "Test Postcode 123 !'` Test Postcode 123 !'` Test Postcode 123 !'` Test Postcode 123 !'` Test Postcode 123 !'` Test Postcode 123 !'` Test Postcode 123 !'` Test Postcode 123 !'` Test Postcode 123 !'` Test Postcode 123 !'` Test Postcode 123 !'` Test Postcode 123 !'` Test Postcode 123 !'` Test Postcode 123 !'` Test Postcode 123 !'` Test Postcode 123 !'` Test Postcode 123 !'` ",
    category_seaside: false,
    category_castles: false,
    category_caves: false,
    category_peaceful: true,
    category_hiking: true,
    category_hills: true,
    category_historic: false,
    category_secluded: false,
    category_casual: true,
    category_lakes: true,
    category_busy: false,
    category_woods: true,
    amenities_parking: true,
    amenities_food: true,
    amenities_family: true,
    amenities_changing_facilities: true,
    amenities_disability_access: true,
    amenities_peaceful: true,
    amenities_electric_charging: true,
    amenities_no_restaurants: false,
    amenities_museums: false,
    amenities_beach: false,
    amenities_hiking: true,
    amenities_pet_friendly: true,
    amenities_forests: true,
    amenities_lots_of_wildlife: true,
    amenities_watersports: true,
    amenities_shopping: true,
    amenities_bodies_of_water: true,
    amenities_camping: false,
    amenities_mountains: false,
    amenities_hearing_loop: false,
    amenities_public_transport_good: true,
    amenities_public_transport_bad: false,
    amenities_accommodation: true,
    amenities_wifi: true,
    image_url: "https://media-cdn.tripadvisor.com/media/photo-s/0f/36/11/1a/photo3jpg.jpg",
    latitude: 51.235323,
    longitude: -2.2483279
};

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
        Sends a POST request to /locations where body = location (i.e. body: {location_id: 1, ... })
        Checks if the response's HTTP status code is 201
        Checks if the response's body is an object with the structure: { success: true, payload: [{ location }] }
        Checks if the location object has the structure expectedLocation
        `, async () => {
            const response = await request(app).post("/locations").send(testLocation).expect(201);
        }
    );
})