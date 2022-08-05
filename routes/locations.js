import express from "express";
import { getAllLocationsOnlyTrue, getAllLocations, getLocationById, postNewLocation } from "../models/locations.js";

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
  res.json({ success: true, payload: data});
})

router.delete('/:id', async function (req, res) {
  let locationId = req.params.id;
  let data = await deleteLocationById(locationId);
  res.send('Deleted Successsfully');
});

export default router;