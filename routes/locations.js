import express from "express";
import { getAllLocationsOnlyTrue, getAllLocations, getLocationById } from "../models/locations.js";

const router = express.Router();

/* GET users listing. */
router.get("/", async function (req, res, next) {
    const data = await getAllLocationsOnlyTrue();
    res.json({ success: true, payload: data });
});

export default router;


router.get("/location/:id", async function (req, res) {
    let locationId = req.params.id;
    let data = await getLocationById(locationId);
    res.json({ success: true, payload: data});
  });

  router.delete('/location/:id', async function (req, res) {
    let locationId = req.params.id;
    let data = await deleteLocationById(locationId);
    res.send('Deleted Successsfully');
});
