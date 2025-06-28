
import AccountDetails from "../models/account-details.model.js";
import Order from "../models/order.model.js";

class OrderRepository {
    /**
     * Create Order in database
     * @param {Object} data 
     * @return {InstanceType<typeof Order>} Order
     */
    async createOrder(data) {
        const OrderDetails = await Order.create(data);
        return OrderDetails;
    }

    async getBalance(userId) {
        const accountDetails = await AccountDetails.findOne({user:userId}).sort({ _id: -1 });
        return accountDetails;
    }
}

export default new OrderRepository();