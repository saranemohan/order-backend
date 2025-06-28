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
}

export default new OrderRepository();