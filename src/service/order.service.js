import _ from "lodash";
import orderRepository from "../repository/order.repository.js";

class OrderService {

    /**
     * Format order response
     * @param {Order} orderData 
     * @returns 
     */
    #productDataFormat = (order) => _.pick(order, ['_id', 'security', 'type', 'value', 'quantity', "createdBy"])

    /**
     * Business logic of create a data
     * @param {String}  
     * @param {String}  
     */
    async createOrder(data) {
        data.type = data.transactionType;
        delete data.transactionType;

        data.value = data.orderValue;
        delete data.orderValue;

        const productData = await orderRepository.createOrder(data);
        if (productData) {
            return this.#productDataFormat(productData)
        } else {
            throw new Error(MESSAGES.PRODUCT_CREATION_FAILED);
        }
    }
}

export default new OrderService();