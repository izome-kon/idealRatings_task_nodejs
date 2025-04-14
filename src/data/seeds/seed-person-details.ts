import connectMongoDB from "../../../src/config/mongodb";
import { PersonMongoModel } from "../../../src/models";


/**
 * Seeds the MongoDB database with person details.
 *
 * This function connects to the MongoDB database, then deletes all existing documents
 * in the Person collection. It then inserts a set of four person documents into the
 * collection. The function logs a message to the console to indicate whether the
 * seeding process was successful or not. The function exits the process with a
 * status code of 0 after completing.
 *
 * The function does not return any value.
 */
export async function seedMongoPersonDetails() {
    await connectMongoDB();
    try {
        await PersonMongoModel.deleteMany({});
        await PersonMongoModel.insertMany([
            {
                name: "Ahmed Mohammed",
                telephoneNumber: "20-010334445",
                address: "10 Road Street",
                country: "Egypt",
            },
            {
                name: "Mona Mahmoud",
                telephoneNumber: "20-010334445",
                address: "11 Road Street",
                country: "Egypt",
            },
            {
                name: "Mohammed Rabie",
                telephoneNumber: "970-111111111",
                address: "15 Road Street",
                country: "Palestine",
            },
            {
                name: "Ana yousif",
                telephoneNumber: "961-111111111",
                address: "20 Road Street",
                country: "Lebanon",
            },
        ]);
        console.log("MongoDB person seed completed!");
    } catch (error) {
        console.log(error);
    }
    process.exit(0);
}