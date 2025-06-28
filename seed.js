import connectDB from "./src/config/db.config.js";
import SecurityDetails from "./src/models/security-details.model.js";


await connectDB();


await SecurityDetails.deleteMany({});
const seedData = [
    { name: "Google", value: 5000 },
    { name: "Meta", value: 10000 },
    { name: "Tesla", value: 7500 }
];
await SecurityDetails.insertMany(seedData);

console.log('Seeding completed');
process.exit();
