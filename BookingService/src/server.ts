import express from 'express';
import { serverConfig } from './config';
import v1Router from './routers/v1/index.router';
import v2Router from './routers/v2/index.router';
import { appErrorHandler, genericErrorHandler } from './middlewares/error.middleware';
import logger from './config/logger.config';
import { attachCorrelationIdMiddleware } from './middlewares/correlation.middleware';
import { addEmailToQueue } from './producers/email.producer';
import { NotificationDto } from './dto/notification.dto';

const app = express();

app.use(express.json());

/**
 * Registering all the routers and their corresponding routes with out app server object.
 */

app.use(attachCorrelationIdMiddleware);
app.use('/api/v1', v1Router);
app.use('/api/v2', v2Router); 


/**
 * Add the error handler middleware
 */

app.use(appErrorHandler);
app.use(genericErrorHandler);


app.listen(serverConfig.PORT, async() => {
    logger.info(`Server is running on http://localhost:${serverConfig.PORT}`);
    logger.info(`Press Ctrl+C to stop the server.`);

     for(let i = 0; i < 10; i++){
        const sampleNotification: NotificationDto = {
            to: `smaple from booking ${i}`,
            subject: 'Sample Email booking',
            templateId: 'sample-template',
            params: {
                name: 'Braj singh',
                orderId: '1234567890',
                orderDate:"2026-07-12",
            }
        }
        addEmailToQueue(sampleNotification);
     }
});
