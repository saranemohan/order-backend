export const MESSAGES = {
    ROUTE_NOT_AVAILABLE: "API Not Found",
    SERVER_ERROR: 'Internal Server Error',
    ORDER_CREATION_FAILED: "Failed to create a order",
    VALIDATION: {
        REQ: {
            SECURITY: "Security is required",
            TYPE: "Transaction Type is required",
            QUANTITY: "Quantity is required",
            ORDER_VALUE: "Order value is required",
        },
        FORMAT: {
            SECURITY: "Invalid Security",
            QUANTITY: "Invalid Quantity",
            ORDER_VALUE: "Invalid Order Value",
        },
        LIMIT: {
            QUANTITY: "Must be more than 0"
        }
    }
}