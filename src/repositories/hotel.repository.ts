import Hotel from "../db/models/hotels";
import { CreateHotelDto } from "../dto/hotel.dto";
import logger from "../config/logger.config";
import { NotFoundError } from "../utils/errors/app.error";

export async function createHotel(hotel: CreateHotelDto): Promise<Hotel> {
    const createdHotel = await Hotel.create(hotel);
    logger.info(`Hotel created successfully: ${createdHotel.id}`);
    return createdHotel;
}


export async function getHotelById(id: number): Promise<Hotel | null> {
    const hotel = await Hotel.findByPk(id);
    if (!hotel) {
        logger.error(`Hotel not found: ${id}`);
        throw new NotFoundError(`Hotel not found: ${id}`);
    }

    logger.info(`Hotel found: ${hotel.id}`);
    return hotel;
}