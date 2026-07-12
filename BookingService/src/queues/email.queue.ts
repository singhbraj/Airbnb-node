import {  ConnectionOptions, Queue } from 'bullmq';
import { getConnectionObject } from '../config/redis.config';


export const MAILER_QUEUE = 'queue-mailer';

export const mailerQueue = new Queue(MAILER_QUEUE, {
    connection: getConnectionObject() as unknown as ConnectionOptions,
});

