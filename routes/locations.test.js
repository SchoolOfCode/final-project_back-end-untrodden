import request from 'supertest';
import app from '../app.js';

describe("GET /locations", () => {
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
        "amenities": expect.any(Array),
        "user_email": expect.any(String)
    };
    
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
        "amenities": expect.any(Array),
        "user_email": expect.any(String)
    };
    
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
    const testLocations = [
        {
            location_name: "Test Location 1",
            street: "Delamere Forest",
            town: "Delamere",
            region: "North West",
            postcode: "CW8 2HZ",
            location_description: "Using forest gravelled tracks and purpose-built stoned paths up the hill you will be rewarded by enormous skies and an endless view. There are plenty of benches along the route to encourage you to stop and take it all in. With hourly trains from Manchester and Chester, Delamere Forest and the Old Pale walk is a great place to explore at any time of year.",
            category_seaside: false,
            category_castles: false,
            category_caves: false,
            category_peaceful: true,
            category_hiking: false,
            category_hills: true,
            category_historic: false,
            category_secluded: true,
            category_casual: true,
            category_lakes: false,
            category_busy: false,
            category_woods: true,
            amenities_parking: true,
            amenities_food: true,
            amenities_family: true,
            amenities_changing_facilities: false,
            amenities_disability_access: true,
            amenities_peaceful: true,
            amenities_electric_charging: false,
            amenities_no_restaurants: false,
            amenities_museums: false,
            amenities_beach: false,
            amenities_hiking: false,
            amenities_pet_friendly: true,
            amenities_forests: false,
            amenities_lots_of_wildlife: true,
            amenities_watersports: false,
            amenities_shopping: false,
            amenities_bodies_of_water: false,
            amenities_camping: false,
            amenities_mountains: false,
            amenities_hearing_loop: false,
            amenities_public_transport_good: true,
            amenities_public_transport_bad: false,
            amenities_accommodation: false,
            amenities_wifi: false,
            image_url: "https://res.cloudinary.com/dnshrtqmv/image/upload/v1659962631/untrodden-pics/old_pale_rwsbbp.jpg",
            latitude:  53.22376473032904, 
            longitude: -2.6849296015820943,
            user_email: "untroddensoc@gmail.com"
        },
        {
            location_name: "Test Location 2",
            street: "Dunnottar Castle",
            town: "Stonehaven",
            region: "North East Scotland",
            postcode: "AB39 2TL",
            location_description: "Dunnottar Castle is a dramatic and evocative ruined cliff top fortress which was the home of the Earls Marischal, once one of the most powerful families in Scotland. Steeped in history, this romantic and haunting ruin is a photographer's paradise, a history lovers dream and an iconic tourist destination for visitors the world over. Visit Dunnottar Castle for your own unforgettable experience and discover the importance of Dunnottar - an impregnable fortress that holds many rich secrets of Scotland's colourful past.",
            category_seaside: true,
            category_castles: true,
            category_caves: false,
            category_peaceful: true,
            category_hiking: true,
            category_hills: true,
            category_historic: true,
            category_secluded: true,
            category_casual: true,
            category_lakes: false,
            category_busy: false,
            category_woods: false,
            amenities_parking: true,
            amenities_food: true,
            amenities_family: true,
            amenities_changing_facilities: true,
            amenities_disability_access: true,
            amenities_peaceful: true,
            amenities_electric_charging: false,
            amenities_no_restaurants: false,
            amenities_museums: false,
            amenities_beach: false,
            amenities_hiking: true,
            amenities_pet_friendly: true,
            amenities_forests: false,
            amenities_lots_of_wildlife: false,
            amenities_watersports: false,
            amenities_shopping: false,
            amenities_bodies_of_water: true,
            amenities_camping: false,
            amenities_mountains: false,
            amenities_hearing_loop: false,
            amenities_public_transport_good: true,
            amenities_public_transport_bad: false,
            amenities_accommodation: false,
            amenities_wifi: false,
            image_url: "https://res.cloudinary.com/dnshrtqmv/image/upload/v1659962631/untrodden-pics/dunnottar_castle_fm0vft.jpg",
            latitude:  56.945395623234326, 
            longitude: -2.1978927412285247,
            user_email: "untroddensoc@gmail.com"
        }
    ];

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
        "user_email": expect.any(String),
        "category_seaside": expect.any(Boolean),
        "category_castles": expect.any(Boolean),
        "category_caves": expect.any(Boolean),
        "category_peaceful": expect.any(Boolean),
        "category_hiking": expect.any(Boolean),
        "category_hills": expect.any(Boolean),
        "category_historic": expect.any(Boolean),
        "category_secluded": expect.any(Boolean),
        "category_casual": expect.any(Boolean),
        "category_lakes": expect.any(Boolean),
        "category_busy": expect.any(Boolean),
        "category_woods": expect.any(Boolean),
        "amenities_parking": expect.any(Boolean),
        "amenities_food": expect.any(Boolean),
        "amenities_family": expect.any(Boolean),
        "amenities_changing_facilities": expect.any(Boolean),
        "amenities_disability_access": expect.any(Boolean),
        "amenities_peaceful": expect.any(Boolean),
        "amenities_electric_charging": expect.any(Boolean),
        "amenities_no_restaurants": expect.any(Boolean),
        "amenities_museums": expect.any(Boolean),
        "amenities_beach": expect.any(Boolean),
        "amenities_hiking": expect.any(Boolean),
        "amenities_pet_friendly": expect.any(Boolean),
        "amenities_forests": expect.any(Boolean),
        "amenities_lots_of_wildlife": expect.any(Boolean),
        "amenities_watersports": expect.any(Boolean),
        "amenities_shopping": expect.any(Boolean),
        "amenities_bodies_of_water": expect.any(Boolean),
        "amenities_camping": expect.any(Boolean),
        "amenities_mountains": expect.any(Boolean),
        "amenities_hearing_loop": expect.any(Boolean),
        "amenities_public_transport_good": expect.any(Boolean),
        "amenities_public_transport_bad": expect.any(Boolean),
        "amenities_accommodation": expect.any(Boolean),
        "amenities_wifi": expect.any(Boolean)
    };
    
    test(`
        Sends a POST request to /locations
        Checks if the response's HTTP status code is 201
        Checks if the response's body is an object with the structure: { success: true, payload: [{ location }] }
        Checks if the location object has the structure expectedLocation
        `, async () => {
            const response = await request(app).post("/locations").send((testLocations[0])).expect(201);
            expect(response.body).toStrictEqual({ success: true, payload: expect.any(Array) });
            expect(response.body.payload.length).toBe(1);
            expect(response.body.payload[0]).toStrictEqual(expectedLocation);
        }
    );
})