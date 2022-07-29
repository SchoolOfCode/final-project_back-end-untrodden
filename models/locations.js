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
  return response.rows;
}


export async function deleteLocationById(id) {
const response = await db.query(`DELETE FROM locations WHERE location_id = $1`, [id]);
}