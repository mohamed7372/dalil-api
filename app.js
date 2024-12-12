import express from "express";
import cors from "cors";
import "dotenv/config";
import helmet from "helmet";
import authRouter from "./routes/Auth/AuthRoutes.js";
import trackingRoutes from "./routes/Schedule/ScheduleRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(helmet());
app.use((req, res, next) => {
    res.setHeader("X-XSS-Protection", "1; mode=block");
    next();
});

// create express app
app.use(express.json());

// define a simple route
// ASCII art for "N.E.U.R.O."
const asciiArt = `
******************************************************
*                                                    *
*    ███╗   ██╗███████╗██╗   ██╗██████╗  ██████╗     *
*    ████╗  ██║██╔════╝██║   ██║██╔══██╗██╔═══██╗    *
*    ██╔██╗ ██║█████╗  ██║   ██║██║  ██║██║   ██║    *
*    ██║╚██╗██║██╔══╝  ╚██╗ ██╔╝██║  ██║██║   ██║    *
*    ██║ ╚████║███████╗ ╚████╔╝ ██████╔╝╚██████╔╝    *
*    ╚═╝  ╚═══╝╚══════╝  ╚═══╝  ╚═════╝  ╚═════╝     *
*                                                    *
*    Next-gen Engineers Using Robust Optimization    *
*                                                    *
******************************************************
        ||         BENRABAH Mohamed         ||         
        ||    Algerie Telectom URD TEAM     ||         
`;

app.get("/", (req, res) => {
    res.send(`<pre>${asciiArt}</pre>`);
});

// all routes
app.use(authRouter, trackingRoutes);

// Middleware to handle errors
app.use((req, res, next) => {
    res.status(401).json({ message: "Unauthorized" });
    next();
});

// run backend
const port = process.env.PORT || 5001;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
