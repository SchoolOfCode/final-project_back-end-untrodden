import db from "../db/connection.js";

// TODO: try to only return TRUE categories and amenities 
export async function getAllLocations() {
  const result = await db.query(`SELECT * FROM locations;`);
  const locationsArray = result.rows;
  const newLocationsArray = [];
  for (let i = 0; i < locationsArray.length; i++) {
    const location = {
      location_id: locationsArray[i].location_id,
      location_name: locationsArray[i].location_name,
      street: locationsArray[i].street,
      town: locationsArray[i].town,
      region: locationsArray[i].region,
      postcode: locationsArray[i].postcode,
      location_description: locationsArray[i].location_description,
      categories: {
        category_seaside: locationsArray[i].category_seaside,
        category_castles: locationsArray[i].category_castles,
        category_caves: locationsArray[i].category_caves,
        category_peaceful: locationsArray[i].category_peaceful,
        category_hiking: locationsArray[i].category_hiking,
        category_hills: locationsArray[i].category_hills,
        category_historic: locationsArray[i].category_historic,
        category_secluded: locationsArray[i].category_secluded,
        category_casual: locationsArray[i].category_casual,
        category_lakes: locationsArray[i].category_lakes,
        category_busy: locationsArray[i].category_busy,
        category_woods: locationsArray[i].category_woods,
      },
      amenities: {
        amenities_parking: locationsArray[i].amenities_parking,
        amenities_food: locationsArray[i].amenities_parking,
        amenities_family: locationsArray[i].amenities_family,
        amenities_changing_facilities: locationsArray[i].amenities_changing_facilities,
        amenities_disability_access: locationsArray[i].amenities_disability_access,
        amenities_peaceful: locationsArray[i].amenities_peaceful,
        amenities_electric_charging: locationsArray[i].amenities_electric_charging,
        amenities_no_restaurants: locationsArray[i].amenities_no_restaurants,
        amenities_museums: locationsArray[i].amenities_museums,
        amenities_beach: locationsArray[i].amenities_beach,
        amenities_hiking: locationsArray[i].amenities_hiking,
        amenities_pet_friendly: locationsArray[i].amenities_pet_friendly,
        amenities_forests: locationsArray[i].amenities_forests,
        amenities_lots_of_wildlife: locationsArray[i].amenities_lots_of_wildlife,
        amenities_watersports: locationsArray[i].amenities_watersports,
        amenities_shopping: locationsArray[i].amenities_shopping,
        amenities_bodies_of_water: locationsArray[i].amenities_bodies_of_water,
        amenities_camping: locationsArray[i].amenities_camping,
        amenities_mountains: locationsArray[i].amenities_mountains,
        amenities_hearing_loop: locationsArray[i].amenities_hearing_loop,
        amenities_public_transport_good: locationsArray[i].amenities_public_transport_good,
        amenities_public_transport_bad: locationsArray[i].amenities_public_transport_bad,
        amenities_accommodation: locationsArray[i].amenities_accommodation,
        amenities_wifi: locationsArray[i].amenities_wifi,
      },
      image_url: locationsArray[i].image_url,
      latitude: locationsArray[i].latitude,
      longitude: locationsArray[i].longitude,
    }
    newLocationsArray.push(location);
    // const keys = Object.keys(locationsArray[i])
    // location.categories = keys.filter(key => key.includes('category'))
    // location.amenities = keys.filter(key => key.includes('amenities'))
    // console.log(location);
  }
  return newLocationsArray;
}