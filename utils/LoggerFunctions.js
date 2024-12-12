import winston from "winston";

// Create a logger instance
export const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    // Logs will be saved to a file
    new winston.transports.File({ filename: "logs/actions.log" }),
    new winston.transports.Console(), // Also log to console for debugging
  ],
});
