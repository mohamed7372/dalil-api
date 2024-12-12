import ScheduleService from "../../services/Schedule/ScheduleService.js";

export const getSchedulesByStation = async (req, res) => {
    try {
        const { station } = req.params;

        if (!station) {
            return res
                .status(400)
                .json({ error: "Station parameter is required." });
        }

        const schedules = await ScheduleService.getSchedulesByStation(station);

        if (schedules.length === 0) {
            return res
                .status(404)
                .json({ message: "No schedules found for the given station." });
        }

        res.status(200).json(schedules);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "An error occurred while fetching schedules.",
        });
    }
};

export const getAllRouteSegments = async (req, res) => {
    try {
        const routeSegments = await routeSegmentService.getAllRouteSegments();
        res.status(200).json(routeSegments);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "An error occurred while fetching route segments.",
        });
    }
};

export const createRouteSegmentWithSuggests = async (req, res) => {
    try {
        const {
            startStation,
            endStation,
            startLat,
            startLon,
            endLat,
            endLon,
            travelTime,
            ticketPrice,
            suggests,
        } = req.body;

        // Validate input
        if (
            !startStation ||
            !endStation ||
            !startLat ||
            !startLon ||
            !endLat ||
            !endLon ||
            !suggests
        ) {
            return res
                .status(400)
                .json({ error: "All required fields must be provided." });
        }

        if (!Array.isArray(suggests) || suggests.length === 0) {
            return res
                .status(400)
                .json({ error: "Suggests must be a non-empty array." });
        }

        const routeSegment =
            await ScheduleService.createRouteSegmentWithSuggests({
                startStation,
                endStation,
                startLat,
                startLon,
                endLat,
                endLon,
                travelTime,
                ticketPrice,
                suggests,
            });

        res.status(201).json(routeSegment);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "An error occurred while creating the route segment.",
        });
    }
};
