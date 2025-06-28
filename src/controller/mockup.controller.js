import SecurityDetails from "../models/security-details.model.js";

const listSecurity = async (req, res) => {
    const securityDetails = await SecurityDetails.find({}).lean();
    res.json(securityDetails);
}

export default {listSecurity};
