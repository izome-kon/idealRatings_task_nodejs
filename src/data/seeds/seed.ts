import { seedMongoPersonDetails } from "./seed-person-details";
import dotenv from "dotenv";
dotenv.config();

async function main() {
    await seedMongoPersonDetails();
}

main();