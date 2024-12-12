import SeedFunctions from "./utils/SeedFunctions.js";

const runSeeds = async () => {
    try {
        await SeedFunctions.seedSuperAdmin();
        console.log("all seeds completed successfully");
    } catch (error) {
        console.error("error running seeds", error.message);
    } finally {
        process.exit();
    }
};

runSeeds();
