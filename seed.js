import connectDB from "./src/config/db.config.js";
import AccountDetails from "./src/models/account-details.model.js";
import SecurityDetails from "./src/models/security-details.model.js";


await connectDB();

const seedSecurityDetails = async () => {
    await SecurityDetails.deleteMany({});
    const seedData = [
        { name: "Google", value: 5000 },
        { name: "Meta", value: 10000 },
        { name: "Tesla", value: 7500 }
    ];
    await SecurityDetails.insertMany(seedData);
}

// const seedAccountDetailsSchema = async () => {
    await AccountDetails.deleteMany({});
    const seedData = [
        {
            user: "685fcdebe2e7715a38cca00f",
            credit: 0,
            debit: 0,
            balance: 10000,
        },
    ];
    await AccountDetails.insertMany(seedData);
// }


console.log('Seeding completed');
process.exit();
