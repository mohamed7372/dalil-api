import { Prisma, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const subwayData = [
    {
        name: "215",
        price: 50,
        type: "SUBWAY",
        lineNumber: "1",
        capacity: 200,
        schedules: [
            {
                station: "Tafourah - Grande Poste",
                latitude: 36.7703,
                longitude: 3.0585,
                arrivalTime: "2024-01-01T06:20:00Z",
                departureTime: "2024-01-01T06:25:00Z",
            },
            {
                station: "Khelifa Boukhalfa",
                latitude: 36.7646,
                longitude: 3.0572,
                arrivalTime: "2024-01-01T06:30:00Z",
                departureTime: "2024-01-01T06:35:00Z",
            },
            {
                station: "1er Mai",
                latitude: 36.7589,
                longitude: 3.0508,
                arrivalTime: "2024-01-01T06:40:00Z",
                departureTime: "2024-01-01T06:45:00Z",
            },
            {
                station: "Aïssat Idir",
                latitude: 36.7555,
                longitude: 3.0452,
                arrivalTime: "2024-01-01T06:50:00Z",
                departureTime: "2024-01-01T06:55:00Z",
            },
            {
                station: "Hamma",
                latitude: 36.7489,
                longitude: 3.0438,
                arrivalTime: "2024-01-01T07:00:00Z",
                departureTime: "2024-01-01T07:05:00Z",
            },
            {
                station: "Jardin d'essai",
                latitude: 36.7445,
                longitude: 3.0412,
                arrivalTime: "2024-01-01T07:10:00Z",
                departureTime: "2024-01-01T07:15:00Z",
            },
            {
                station: "Les Fusillés",
                latitude: 36.741,
                longitude: 3.0388,
                arrivalTime: "2024-01-01T07:20:00Z",
                departureTime: "2024-01-01T07:25:00Z",
            },
            {
                station: "Cité Amirouche",
                latitude: 36.7378,
                longitude: 3.035,
                arrivalTime: "2024-01-01T07:30:00Z",
                departureTime: "2024-01-01T07:35:00Z",
            },
            {
                station: "Cité Mer et Soleil",
                latitude: 36.7339,
                longitude: 3.0307,
                arrivalTime: "2024-01-01T07:40:00Z",
                departureTime: "2024-01-01T07:45:00Z",
            },
        ],
    },
];
const subwayTime = [
    "2024-12-12T06:00:00.000Z",
    "2024-12-12T06:06:00.000Z",
    "2024-12-12T06:12:00.000Z",
    "2024-12-12T06:18:00.000Z",
    "2024-12-12T06:24:00.000Z",
    "2024-12-12T06:30:00.000Z",
    "2024-12-12T06:36:00.000Z",
    "2024-12-12T06:42:00.000Z",
    "2024-12-12T06:48:00.000Z",
    "2024-12-12T06:54:00.000Z",
    "2024-12-12T07:00:00.000Z",
    "2024-12-12T07:06:00.000Z",
    "2024-12-12T07:12:00.000Z",
    "2024-12-12T07:18:00.000Z",
    "2024-12-12T07:24:00.000Z",
    "2024-12-12T07:30:00.000Z",
    "2024-12-12T07:36:00.000Z",
    "2024-12-12T07:42:00.000Z",
    "2024-12-12T07:48:00.000Z",
    "2024-12-12T07:54:00.000Z",
    "2024-12-12T08:00:00.000Z",
    "2024-12-12T08:06:00.000Z",
    "2024-12-12T08:12:00.000Z",
    "2024-12-12T08:18:00.000Z",
    "2024-12-12T08:24:00.000Z",
    "2024-12-12T08:30:00.000Z",
    "2024-12-12T08:36:00.000Z",
    "2024-12-12T08:42:00.000Z",
    "2024-12-12T08:48:00.000Z",
    "2024-12-12T08:54:00.000Z",
    "2024-12-12T09:00:00.000Z",
    "2024-12-12T09:06:00.000Z",
    "2024-12-12T09:12:00.000Z",
    "2024-12-12T09:18:00.000Z",
    "2024-12-12T09:24:00.000Z",
    "2024-12-12T09:30:00.000Z",
    "2024-12-12T09:36:00.000Z",
    "2024-12-12T09:42:00.000Z",
    "2024-12-12T09:48:00.000Z",
    "2024-12-12T09:54:00.000Z",
    "2024-12-12T10:00:00.000Z",
    "2024-12-12T10:06:00.000Z",
    "2024-12-12T10:12:00.000Z",
    "2024-12-12T10:18:00.000Z",
    "2024-12-12T10:24:00.000Z",
    "2024-12-12T10:30:00.000Z",
    "2024-12-12T10:36:00.000Z",
    "2024-12-12T10:42:00.000Z",
    "2024-12-12T10:48:00.000Z",
    "2024-12-12T10:54:00.000Z",
    "2024-12-12T11:00:00.000Z",
    "2024-12-12T11:06:00.000Z",
    "2024-12-12T11:12:00.000Z",
    "2024-12-12T11:18:00.000Z",
    "2024-12-12T11:24:00.000Z",
    "2024-12-12T11:30:00.000Z",
    "2024-12-12T11:36:00.000Z",
    "2024-12-12T11:42:00.000Z",
    "2024-12-12T11:48:00.000Z",
    "2024-12-12T11:54:00.000Z",
    "2024-12-12T12:00:00.000Z",
];

const tramwayData = [
    {
        name: "Tramway Algiers Line",
        price: 40,
        type: "TRAMWAY",
        lineNumber: "1",
        capacity: 205,
        schedules: [
            {
                station: "Ruisseau",
                latitude: 36.7485,
                longitude: 3.0794,
                arrivalTime: "2024-01-01T08:00:00Z",
                departureTime: "2024-01-01T08:05:00Z",
            },
            {
                station: "Les Fusillés",
                latitude: 36.749,
                longitude: 3.08,
                arrivalTime: "2024-01-01T08:10:00Z",
                departureTime: "2024-01-01T08:15:00Z",
            },
            {
                station: "Tripoli-Thaalibia",
                latitude: 36.7495,
                longitude: 3.081,
                arrivalTime: "2024-01-01T08:20:00Z",
                departureTime: "2024-01-01T08:25:00Z",
            },
            {
                station: "Tripoli-Mosquée",
                latitude: 36.75,
                longitude: 3.082,
                arrivalTime: "2024-01-01T08:30:00Z",
                departureTime: "2024-01-01T08:35:00Z",
            },
            {
                station: "Tripoli-Hamadache",
                latitude: 36.7505,
                longitude: 3.083,
                arrivalTime: "2024-01-01T08:40:00Z",
                departureTime: "2024-01-01T08:45:00Z",
            },
            {
                station: "Tripoli-Maqqaria",
                latitude: 36.751,
                longitude: 3.084,
                arrivalTime: "2024-01-01T08:50:00Z",
                departureTime: "2024-01-01T08:55:00Z",
            },
            {
                station: "Caroubier",
                latitude: 36.7515,
                longitude: 3.085,
                arrivalTime: "2024-01-01T09:00:00Z",
                departureTime: "2024-01-01T09:05:00Z",
            },
        ],
    },
];
const tramwayTime = [
    "2024-12-12T06:00:00.000Z",
    "2024-12-12T06:06:00.000Z",
    "2024-12-12T06:12:00.000Z",
    "2024-12-12T06:18:00.000Z",
    "2024-12-12T06:24:00.000Z",
    "2024-12-12T06:30:00.000Z",
    "2024-12-12T06:36:00.000Z",
    "2024-12-12T06:42:00.000Z",
    "2024-12-12T06:48:00.000Z",
    "2024-12-12T06:54:00.000Z",
    "2024-12-12T07:00:00.000Z",
    "2024-12-12T07:06:00.000Z",
    "2024-12-12T07:12:00.000Z",
    "2024-12-12T07:18:00.000Z",
    "2024-12-12T07:24:00.000Z",
    "2024-12-12T07:30:00.000Z",
    "2024-12-12T07:36:00.000Z",
    "2024-12-12T07:42:00.000Z",
    "2024-12-12T07:48:00.000Z",
    "2024-12-12T07:54:00.000Z",
    "2024-12-12T08:00:00.000Z",
    "2024-12-12T08:06:00.000Z",
    "2024-12-12T08:12:00.000Z",
    "2024-12-12T08:18:00.000Z",
    "2024-12-12T08:24:00.000Z",
    "2024-12-12T08:30:00.000Z",
    "2024-12-12T08:36:00.000Z",
    "2024-12-12T08:42:00.000Z",
    "2024-12-12T08:48:00.000Z",
    "2024-12-12T08:54:00.000Z",
    "2024-12-12T09:00:00.000Z",
    "2024-12-12T09:06:00.000Z",
    "2024-12-12T09:12:00.000Z",
    "2024-12-12T09:18:00.000Z",
    "2024-12-12T09:24:00.000Z",
    "2024-12-12T09:30:00.000Z",
    "2024-12-12T09:36:00.000Z",
    "2024-12-12T09:42:00.000Z",
    "2024-12-12T09:48:00.000Z",
    "2024-12-12T09:54:00.000Z",
    "2024-12-12T10:00:00.000Z",
    "2024-12-12T10:06:00.000Z",
    "2024-12-12T10:12:00.000Z",
    "2024-12-12T10:18:00.000Z",
    "2024-12-12T10:24:00.000Z",
    "2024-12-12T10:30:00.000Z",
    "2024-12-12T10:36:00.000Z",
    "2024-12-12T10:42:00.000Z",
    "2024-12-12T10:48:00.000Z",
    "2024-12-12T10:54:00.000Z",
    "2024-12-12T11:00:00.000Z",
    "2024-12-12T11:06:00.000Z",
    "2024-12-12T11:12:00.000Z",
    "2024-12-12T11:18:00.000Z",
    "2024-12-12T11:24:00.000Z",
    "2024-12-12T11:30:00.000Z",
    "2024-12-12T11:36:00.000Z",
    "2024-12-12T11:42:00.000Z",
    "2024-12-12T11:48:00.000Z",
    "2024-12-12T11:54:00.000Z",
    "2024-12-12T12:00:00.000Z",
];

const busData = [
    {
        name: "64",
        price: 80,
        type: "TRAIN",
        lineNumber: "1",
        capacity: 300,
        schedules: [
            {
                station: "Alger",
                latitude: 36.7528,
                longitude: 3.0588,
                arrivalTime: "2024-01-01T06:00:00Z",
                departureTime: "2024-01-01T06:05:00Z",
            },
            {
                station: "Agha",
                latitude: 36.7532,
                longitude: 3.0615,
                arrivalTime: "2024-01-01T06:10:00Z",
                departureTime: "2024-01-01T06:15:00Z",
            },
            {
                station: "Les Ateliers",
                latitude: 36.754,
                longitude: 3.063,
                arrivalTime: "2024-01-01T06:20:00Z",
                departureTime: "2024-01-01T06:25:00Z",
            },
            {
                station: "Hussein Dey",
                latitude: 36.756,
                longitude: 3.065,
                arrivalTime: "2024-01-01T06:30:00Z",
                departureTime: "2024-01-01T06:35:00Z",
            },
            {
                station: "Caroubier",
                latitude: 36.757,
                longitude: 3.066,
                arrivalTime: "2024-01-01T06:40:00Z",
                departureTime: "2024-01-01T06:45:00Z",
            },
        ],
    },
];
const busTime = [
    "2024-12-12T06:00:00.000Z",
    "2024-12-12T06:45:00.000Z",
    "2024-12-12T07:30:00.000Z",
    "2024-12-12T08:15:00.000Z",
    "2024-12-12T09:00:00.000Z",
    "2024-12-12T09:45:00.000Z",
    "2024-12-12T10:30:00.000Z",
    "2024-12-12T11:15:00.000Z",
    "2024-12-12T12:00:00.000Z",
];

const trainData = [
    {
        name: "64",
        price: 80,
        type: "TRAIN",
        lineNumber: "1",
        capacity: 300,
        schedules: [
            {
                station: "Alger",
                latitude: 36.7528,
                longitude: 3.0588,
                arrivalTime: "2024-01-01T06:00:00Z",
                departureTime: "2024-01-01T06:05:00Z",
            },
            {
                station: "Agha",
                latitude: 36.7532,
                longitude: 3.0615,
                arrivalTime: "2024-01-01T06:10:00Z",
                departureTime: "2024-01-01T06:15:00Z",
            },
            {
                station: "Les Ateliers",
                latitude: 36.754,
                longitude: 3.063,
                arrivalTime: "2024-01-01T06:20:00Z",
                departureTime: "2024-01-01T06:25:00Z",
            },
            {
                station: "Hussein Dey",
                latitude: 36.756,
                longitude: 3.065,
                arrivalTime: "2024-01-01T06:30:00Z",
                departureTime: "2024-01-01T06:35:00Z",
            },
            {
                station: "Caroubier",
                latitude: 36.757,
                longitude: 3.066,
                arrivalTime: "2024-01-01T06:40:00Z",
                departureTime: "2024-01-01T06:45:00Z",
            },
        ],
    },
];
const trainTime = [
    "2024-12-12T06:00:00.000Z",
    "2024-12-12T06:45:00.000Z",
    "2024-12-12T07:30:00.000Z",
    "2024-12-12T08:15:00.000Z",
    "2024-12-12T09:00:00.000Z",
    "2024-12-12T09:45:00.000Z",
    "2024-12-12T10:30:00.000Z",
    "2024-12-12T11:15:00.000Z",
    "2024-12-12T12:00:00.000Z",
];

const clearData = async () => {
    await prisma.schedule.deleteMany();
    await prisma.transportInstance.deleteMany();
    await prisma.transport.deleteMany();
};

const createLinesWithSchedules = async (
    transportLines,
    timeStart,
    name,
    minInt,
    maxInt
) => {
    try {
        // Iterate over each transport line object
        for (const line of transportLines) {
            // Create the transport entry (transport line)
            const transport = await prisma.transport.create({
                data: {
                    name: name,
                    price: line.price,
                    type: line.type,
                },
            });
            console.log(`${transport.name} created with ID: ${transport.id}`);

            // Create the transport instance for the transport line
            const transportInstance = await prisma.transportInstance.create({
                data: {
                    lineNumber: line.lineNumber,
                    capacity: line.capacity,
                    transportId: transport.id,
                },
            });
            console.log(
                `${transport.name} instance created with ID: ${transportInstance.id}`
            );

            // Create schedules for this transport line
            let currentTime = new Date(timeStart);
            const endTime = new Date("2024-12-12T12:00:00Z");

            for (const schedule of line.schedules) {
                // Calculate random interval (6 to 15 minutes)
                const randomInterval =
                    Math.floor(Math.random() * (maxInt - minInt + 1)) + minInt;

                const arrivalTime = new Date(currentTime);
                const departureTime = new Date(currentTime);
                departureTime.setMinutes(
                    departureTime.getMinutes() + randomInterval
                );

                // Save the schedule
                await prisma.schedule.create({
                    data: {
                        station: schedule.station,
                        latitude: schedule.latitude,
                        longitude: schedule.longitude,
                        arrivalTime: arrivalTime.toISOString(),
                        departureTime: departureTime.toISOString(),
                        transportInstanceId: transportInstance.id,
                    },
                });
                console.log(
                    `Schedule created for Station: ${schedule.station} in ${name}`
                );

                // Update the current time for the next schedule
                currentTime = new Date(departureTime);
            }
        }

        console.log(
            "transport lines and schedules have been successfully created."
        );
    } catch (error) {
        console.error("Error creating transport lines and schedules:", error);
        throw new Error("Failed to create transport lines and schedules.");
    }
};

const seedSuperAdmin = async () => {
    try {
        await clearData();

        // generate metro from taforah to mer et soleil
        for (let i = 0; i < subwayTime.length; i++)
            await createLinesWithSchedules(
                subwayData,
                subwayTime[i],
                `${200 + ((i + 1) % 20)}`,
                6,
                12
            );
        // generate metro from mer et soleil to taforah
        for (let i = 0; i < subwayTime.length; i++)
            await createLinesWithSchedules(
                subwayData.map((item) => ({
                    ...item,
                    schedules: item.schedules.reverse(),
                })),
                subwayTime[i],
                `${200 + ((i + 1) % 20)}`,
                6,
                12
            );

        // generate metro from taforah to mer et soleil
        for (let i = 0; i < tramwayTime.length; i++)
            await createLinesWithSchedules(
                tramwayData,
                tramwayTime[i],
                `${100 + ((i + 1) % 20)}`,
                6,
                12
            );
        // generate metro from mer et soleil to taforah
        for (let i = 0; i < tramwayTime.length; i++)
            await createLinesWithSchedules(
                tramwayData.map((item) => ({
                    ...item,
                    schedules: item.schedules.reverse(),
                })),
                tramwayTime[i],
                `${100 + ((i + 1) % 20)}`,
                6,
                12
            );

        // generate metro from taforah to mer et soleil
        for (let i = 0; i < trainTime.length; i++)
            await createLinesWithSchedules(
                trainData,
                trainTime[i],
                `${50 + ((i + 1) % 20)}`,
                6,
                12
            );
        // generate metro from mer et soleil to taforah
        for (let i = 0; i < trainTime.length; i++)
            await createLinesWithSchedules(
                trainData.map((item) => ({
                    ...item,
                    schedules: item.schedules.reverse(),
                })),
                trainTime[i],
                `${50 + ((i + 1) % 20)}`,
                6,
                12
            );

        // generate metro from taforah to mer et soleil
        for (let i = 0; i < busTime.length; i++)
            await createLinesWithSchedules(
                busData,
                busTime[i],
                `${50 + ((i + 1) % 20)}`,
                6,
                12
            );
        // generate metro from mer et soleil to taforah
        for (let i = 0; i < busTime.length; i++)
            await createLinesWithSchedules(
                busData.map((item) => ({
                    ...item,
                    schedules: item.schedules.reverse(),
                })),
                busTime[i],
                `${50 + ((i + 1) % 20)}`,
                6,
                12
            );
    } catch (error) {
        console.error("error seeding super admin", error.message);
    }
};

export default {
    seedSuperAdmin,
};
