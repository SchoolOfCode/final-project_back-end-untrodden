import express from "express";
import { getAllLocationsOnlyTrue, getAllLocations, getLocationById, postNewLocation, deleteLocationById, putLocationById } from "../models/locations.js";

const router = express.Router();

/* GET users listing. */
router.get("/", async function (req, res, next) {
    const data = await getAllLocationsOnlyTrue();
    res.json({ success: true, payload: data });
});

router.get("/:id", async function (req, res) {
  let locationId = req.params.id;
  if (!Number.isInteger(Number(locationId))) {
    res.status(400).json({ message: "Endpoint must be an integer." });
    return;
  }

  let data = await getLocationById(locationId);

  if (data.length === 0) {
    res.status(404).json({ message: "No location found with that id." });
  } else {
    res.json({ success: true, payload: data});
  }
});

router.post("/", async function(req, res, next) {
  const newLocation = req.body; // 'body' will be the location object, e.g. body.latitude
  console.log(newLocation);
  const data = await postNewLocation(newLocation);
  res.status(201).json({ success: true, payload: data});
})

router.put("/:id", async function (req, res) {
  let locationId = Number(req.params.id);
  const updatedLocation = req.body; // 'body' will be the location object, e.g. body.latitude
  let data = await putLocationById(locationId, testLocationForPut);
  res.send('Updated Successsfully');
});

const testLocationForPut = {
  location_name: 'Test',
  street: 'Test',
  town: 'Test',
  region:'Test',
  postcode:'Test',
  location_description:'Test',
  category_seaside:true,
  category_castles:true,
  category_caves:true,
  category_peaceful:true,
  category_hiking:true,
  category_hills:true,
  category_historic:true,
  category_secluded:true,
  category_casual:true,
  category_lakes:true,
  category_busy:true,
  category_woods:true,
  amenities_parking:true,
  amenities_food:true,
  amenities_family:true,
  amenities_changing_facilities:true,
  amenities_disability_access:true,
  amenities_peaceful:true,
  amenities_electric_charging:true,
  amenities_no_restaurants:true,
  amenities_museums:true,
  amenities_beach:true,
  amenities_hiking:true,
  amenities_pet_friendly:true,
  amenities_forests:true,
  amenities_lots_of_wildlife:true,
  amenities_watersports:true,
  amenities_shopping:true,
  amenities_bodies_of_water:true,
  amenities_camping:true,
  amenities_mountains:true,
  amenities_hearing_loop:true,
  amenities_public_transport_good:true,
  amenities_public_transport_bad:true,
  amenities_accommodation:true,
  amenities_wifi:true,
  image_url:"https://res.cloudinary.com/dnshrtqmv/image/upload/v1659972687/no-image-placeholder_copy_yriogz.png",
  latitude:50,
  longitude:2
}

router.delete('/:id', async function (req, res) {
  let locationId = req.params.id;
  let data = await deleteLocationById(locationId);
  res.send('Deleted Successsfully');
});

export default router;