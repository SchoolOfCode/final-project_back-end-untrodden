import db from "../../connection.js";

async function createTable() {
  const response = await db.query(
    `CREATE TABLE IF NOT EXISTS locations (
      location_id SERIAL PRIMARY KEY, 
      location_name TEXT,
      street TEXT,
      town TEXT,
      region TEXT,
      postcode TEXT,
      location_description TEXT,
      category_seaside BOOLEAN,
      category_castles BOOLEAN,
      category_caves BOOLEAN,
      category_peaceful BOOLEAN,
      category_hiking BOOLEAN,
      category_hills BOOLEAN,
      category_historic BOOLEAN,
      category_secluded BOOLEAN,
      category_casual BOOLEAN,
      category_lakes BOOLEAN,
      category_busy BOOLEAN,
      category_woods BOOLEAN,
      amenities_parking BOOLEAN,
      amenities_food BOOLEAN,
      amenities_family BOOLEAN,
      amenities_changing_facilities BOOLEAN,
      amenities_disability_access BOOLEAN,
      amenities_peaceful BOOLEAN,
      amenities_electric_charging BOOLEAN,
      amenities_no_restaurants BOOLEAN,
      amenities_museums BOOLEAN,
      amenities_beach BOOLEAN,
      amenities_hiking BOOLEAN,
      amenities_pet_friendly BOOLEAN,
      amenities_forests BOOLEAN,
      amenities_lots_of_wildlife BOOLEAN,
      amenities_watersports BOOLEAN,
      amenities_shopping BOOLEAN,
      amenities_bodies_of_water BOOLEAN,
      amenities_camping BOOLEAN,
      amenities_mountains BOOLEAN,
      amenities_hearing_loop BOOLEAN,
      amenities_public_transport_good BOOLEAN,
      amenities_public_transport_bad BOOLEAN,
      amenities_accommodation BOOLEAN,
      amenities_wifi BOOLEAN,
      image_url TEXT,
      latitude DECIMAL,
      longitude DECIMAL
    );`
  );

  console.log(response);
  
  db.end();
}

createTable();