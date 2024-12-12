import { Prisma, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import authHelper from "../../helpers/authHelper.js";

const getSchedulesByStation = async (station) => {
    return await prisma.schedule.findMany({
        where: {
            station: station,
        },
        include: {
            transportInstance: {
                select: {
                    lineNumber: true,
                    transport: {
                        select: {
                            type: true,
                            name: true,
                        },
                    },
                },
            },
        },
    });
};

const getAllRouteSegments = async () => {
    return await prisma.routeSegment.findMany({
        include: {
            suggests: {
                include: {
                    schedule: {
                        include: {
                            transportInstance: {
                                include: {
                                    transport: {
                                        select: {
                                            name: true,
                                            type: true, // Transport type
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
    });
};

const createRouteSegmentWithSuggests = async ({
    startStation,
    endStation,
    startLat,
    startLon,
    endLat,
    endLon,
    travelTime,
    ticketPrice,
    suggests,
}) => {
    // Create the route segment with associated suggests
    const routeSegments = await prisma.routeSegment.create({
        data: {
            startStation,
            endStation,
            startLat,
            startLon,
            endLat,
            endLon,
            travelTime,
            ticketPrice,
        },
    });

    let suggestsRes = [];
    for (let i = 0; i < suggests.length; i++) {
        const suggest = await prisma.suggest.create({
            scheduleId: parseInt(suggests[i]),
            step: idx + 1,
            routeSegementId: parseInt(routeSegments.id),
        });

        suggestsRes.push(suggest);
    }

    return {
        ...routeSegments,
        suggests: suggestsRes,
    };
};

export default {
    getSchedulesByStation,
    getAllRouteSegments,
    createRouteSegmentWithSuggests,
};
