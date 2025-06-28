import { body, validationResult } from 'express-validator';
import { MESSAGES } from '../config/constant.config.js';

const orderCreationValidator = [

    body('security')
        .notEmpty().withMessage(MESSAGES.VALIDATION.REQ.SECURITY),

    body('transactionType')
        .notEmpty().withMessage(MESSAGES.VALIDATION.REQ.TYPE),

    body('quantity')
        .notEmpty().withMessage(MESSAGES.VALIDATION.REQ.QUANTITY)
        .isNumeric().withMessage(MESSAGES.VALIDATION.FORMAT.QUANTITY)
        .isInt({ min: 0 }).withMessage(MESSAGES.VALIDATION.LIMIT.QUANTITY),

    body('orderValue')
        .notEmpty().withMessage(MESSAGES.VALIDATION.REQ.ORDER_VALUE)
        .isNumeric().withMessage(MESSAGES.VALIDATION.FORMAT.ORDER_VALUE),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const formattedErrors = errors.array().map(err => ({
                field: err.path,
                message: err.msg,
            }));
            return res.status(400).json({ errors: formattedErrors });
        }
        next();
    }
];

export default orderCreationValidator;

