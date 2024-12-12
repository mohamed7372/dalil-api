import express from "express";
import {
    getSchedulesByStation,
    getAllRouteSegments,
    createRouteSegmentWithSuggests,
} from "../../controllers/Schedule/ScheduleController.js";

const scheduleRoutes = express.Router();

scheduleRoutes.get("/api/schedules/:station", getSchedulesByStation);
scheduleRoutes.get("/api/route-segments", getAllRouteSegments);
scheduleRoutes.post("/api/route-segment", createRouteSegmentWithSuggests);

export default scheduleRoutes;
