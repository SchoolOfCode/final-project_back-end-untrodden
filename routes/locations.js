import express from "express";
import { getAllLocations} from "../models/locations.js";

const router = express.Router();

/* GET users listing. */
router.get("/", async function (req, res, next) {
    const data = await getAllLocations();
    res.json({ success: true, payload: data });
});

export default router;
