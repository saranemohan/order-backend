
import express from 'express';
import startServer from './src/config/app.config.js';
import connectDB from './src/config/db.config.js';
import logAllRequests from './src/middleware/request-logger.js';
import router from './src/router/order.route.js';
import logger from './src/utils/logger.js';
import corsConfig from './src/config/cors.config.js';
import { MESSAGES } from './src/config/constant.config.js';


// Define Express App
const app = express();
await connectDB();

/**
 * All Middlewares defined below
 */
app.use(express.json());

app.use(corsConfig);

logAllRequests(app);

/**
 * All Routes define below
 */

app.use('/api', router);

// Health check & root endpoint
app.get('/', (req, res) => { res.send("Backend API Service is Running") });
app.get('/health', (req, res) => { res.status(200).json({ success: true }) });

// Response for undefined routes and internal server error
app.use((req, res) => {
    res.status(404).json({ success: false, message: MESSAGES.ROUTE_NOT_AVAILABLE });
});

app.use((err, req, res, next) => {
    logger.error(err);
    res.status(500).json({ success: false, message: MESSAGES.SERVER_ERROR });
});

/**
 * Start server
 */
export default app;
startServer(app);