import express from 'express';
import orderController from '../controller/order.controller.js';
import orderCreationValidator from '../validator/order-create.validator.js';
import auth from '../middleware/auth.js';
import mockupController from '../controller/mockup.controller.js';

const router = express.Router();


router.post('/order/create',auth, orderCreationValidator, orderController.addOrder );

// Mockup API
router.post('/security',auth, orderCreationValidator, mockupController.listSecurity );


export default router;