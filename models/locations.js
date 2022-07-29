import db from "../db/connection.js";

export async function getAllLocations() {
  const result = await db.query(`SELECT * FROM locations;`);
  const locationsArray = result.rows;
  const newLocationsArray = [];

  for (let i = 0; i < locationsArray.length; i++) {
    const location = locationsArray[i];
    
    const categories = Object.keys(location).reduce((p, c) => {    
      if (c.startsWith('category_')) {p[c] = location[c]};
      return p;
    }, {});
    location.categories = categories;

    const amenities = Object.keys(location).reduce((p, c) => {    
      if (c.startsWith('amenities_')) {p[c] = location[c]};
      return p;
    }, {});
    location.amenities = amenities;

    Object.keys(location).forEach(key => {
      if (key.startsWith('category_') || key.startsWith('amenities_')) {delete location[key]};
    });

    newLocationsArray.push(location);
  }

  return newLocationsArray;
}

export async function getAllLocationsOnlyTrue() {
  const result = await db.query(`SELECT * FROM locations;`);
  const locationsArray = result.rows;
  const newLocationsArray = [];

  for (let i = 0; i < locationsArray.length; i++) {
    const location = locationsArray[i];
    
    const categories = []
    Object.keys(location).forEach(key => {
      if (key.startsWith('category_') && location[key] === true) {categories.push(key)}
    });
    location.categories = categories;

    const amenities = []
    Object.keys(location).forEach(key => {
      if (key.startsWith('amenities_') && location[key] === true) {amenities.push(key)}
    });
    location.amenities = amenities;


    Object.keys(location).forEach(key => {
      if (key.startsWith('category_') || key.startsWith('amenities_')) {delete location[key]};
    });

    newLocationsArray.push(location);
  }

  return newLocationsArray;

}

export async function getLocationById(id) {
  const response = await db.query(`SELECT * FROM locations WHERE location_id = $1`, [
    id,
  ]);

  const locationsArray = response.rows;
  const newLocationsArray = [];

  for (let i = 0; i < locationsArray.length; i++) {
    const location = locationsArray[i];
    
    const categories = []
    Object.keys(location).forEach(key => {
      if (key.startsWith('category_') && location[key] === true) {categories.push(key)}
    });
    location.categories = categories;

    const amenities = []
    Object.keys(location).forEach(key => {
      if (key.startsWith('amenities_') && location[key] === true) {amenities.push(key)}
    });
    location.amenities = amenities;


    Object.keys(location).forEach(key => {
      if (key.startsWith('category_') || key.startsWith('amenities_')) {delete location[key]};
    });

    newLocationsArray.push(location);
  }

  return newLocationsArray;
}

export async function postNewLocation(newLocation) {
  let sqlString = `INSERT INTO locations (
    location_name,
    street,
    town,
    region,
    postcode,
    location_description,
    category_seaside,
    category_castles,
    category_caves,
    category_peaceful,
    category_hiking,
    category_hills,
    category_historic,
    category_secluded,
    category_casual,
    category_lakes,
    category_busy,
    category_woods,
    amenities_parking,
    amenities_food,
    amenities_family,
    amenities_changing_facilities,
    amenities_disability_access,
    amenities_peaceful,
    amenities_electric_charging,
    amenities_no_restaurants,
    amenities_museums,
    amenities_beach,
    amenities_hiking,
    amenities_pet_friendly,
    amenities_forests,
    amenities_lots_of_wildlife,
    amenities_watersports,
    amenities_shopping,
    amenities_bodies_of_water,
    amenities_camping,
    amenities_mountains,
    amenities_hearing_loop,
    amenities_public_transport_good,
    amenities_public_transport_bad,
    amenities_accommodation,
    amenities_wifi,
    image_url,
    latitude,
    longitude
  ) 
  VALUES (
    $1,
    $2,
    $3,
    $4,
    $5,
    $6,
    ${newLocation.category_seaside},
    ${newLocation.category_castles},
    ${newLocation.category_caves},
    ${newLocation.category_peaceful},
    ${newLocation.category_hiking},
    ${newLocation.category_hills},
    ${newLocation.category_historic},
    ${newLocation.category_secluded},
    ${newLocation.category_casual},
    ${newLocation.category_lakes},
    ${newLocation.category_busy},
    ${newLocation.category_woods},
    ${newLocation.amenities_parking},
    ${newLocation.amenities_food},
    ${newLocation.amenities_family},
    ${newLocation.amenities_changing_facilities},
    ${newLocation.amenities_disability_access},
    ${newLocation.amenities_peaceful},
    ${newLocation.amenities_electric_charging},
    ${newLocation.amenities_no_restaurants},
    ${newLocation.amenities_museums},
    ${newLocation.amenities_beach},
    ${newLocation.amenities_hiking},
    ${newLocation.amenities_pet_friendly},
    ${newLocation.amenities_forests},
    ${newLocation.amenities_lots_of_wildlife},
    ${newLocation.amenities_watersports},
    ${newLocation.amenities_shopping},
    ${newLocation.amenities_bodies_of_water},
    ${newLocation.amenities_camping},
    ${newLocation.amenities_mountains},
    ${newLocation.amenities_hearing_loop},
    ${newLocation.amenities_public_transport_good},
    ${newLocation.amenities_public_transport_bad},
    ${newLocation.amenities_accommodation},
    ${newLocation.amenities_wifi},
    $7,
    ${newLocation.latitude},
    ${newLocation.longitude}
  ) RETURNING *;`;

  const response = await db.query(sqlString, [newLocation.location_name, newLocation.street, newLocation.town, newLocation.region, newLocation.postcode, newLocation.location_description, newLocation.image_url]);
  return response.rows;
}


export async function deleteLocationById(id) {
  const response = await db.query(`DELETE FROM locations WHERE location_id = $1`, [id]);
}