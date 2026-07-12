import IORedis, { Redis } from "ioredis";
import RedLock from "redlock";
import { serverConfig } from ".";




export function connectToRedis() {
    try {
 
     let connection: Redis;
 
   
     
     return ()=>{
         if(!connection){
             connection = new IORedis(serverConfig.REDIS_SERVERURL);
         }
         return connection;
     }
    }
    catch (error) {
     console.error('Error connecting to Redis:', error);
     throw error;
    }
 }   
 
 export const getConnectionObject = connectToRedis();

export const redlock = new RedLock([getConnectionObject()], {
    driftFactor: 0.01, // time in ms
    retryCount: 10,
    retryDelay: 200, // time in ms
    retryJitter: 200, // time in ms
});

