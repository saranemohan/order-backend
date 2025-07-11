import orderService from '../service/order.service.js';
import logger from '../utils/logger.js';
import { isGeneralException } from '../utils/commons.js';

/**
 * Create App Controller Function
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
const addOrder = async (req, res) => {
    try {
        const { security, transactionType, quantity, orderValue } = req.body;
        const createdBy = req.user.id;
        
        const accountDetailsData = await orderService.getBalance(createdBy);
        if(accountDetailsData['balance']<0){
            throw new Error(MESSAGES.DATA_CREATION_FAILED);
        }

        const appData = await orderService.createOrder({security, transactionType, quantity, orderValue,createdBy});
        if (appData) {
            res.status(200).json({ success: true, data: appData });
        } else {
            throw new Error(MESSAGES.DATA_CREATION_FAILED);
        }
    } catch (err) {
        logger.error(err)
        if (isGeneralException(err)) {
            res.status(400).json({ success: false, message: err.message });
        } else {
            throw err;
        }
    }
}
export default {addOrder};