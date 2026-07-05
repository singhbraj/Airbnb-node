import express from 'express';
import { createHotelHandler, deleteHotelHandler, getAllHotelHandler, getHotelByIdHandler, updateHotelHandler } from '../../controllers/hotel.controller';
import { validateRequestBody } from '../../validators';
import { createHotelSchema, updateHotelSchema } from '../../validators/hotel.validator';


const hotelRouter = express.Router();

hotelRouter.post('/', validateRequestBody(createHotelSchema), createHotelHandler);
hotelRouter.get('/', getAllHotelHandler);
hotelRouter.get('/:id', getHotelByIdHandler);
hotelRouter.patch('/:id', validateRequestBody(updateHotelSchema), updateHotelHandler);
hotelRouter.delete('/:id', deleteHotelHandler);

export default hotelRouter;