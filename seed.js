import connectDB from "./src/config/db.config.js";
import SecurityDetails from "./src/models/security-details.model.js";


await connectDB();


await SecurityDetails.deleteMany({});
const seedData = [
    { name: 101, value: 5000 },
    { name: 102, value: 10000 },
    { name: 103, value: 7500 }
];
await SecurityDetails.insertMany(seedData);

console.log('Seeding completed');
process.exit();
