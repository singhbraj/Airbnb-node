import Hotel from "../db/models/hotels";
import { CreateHotelDto, UpdateHotelDto } from "../dto/hotel.dto";
import logger from "../config/logger.config";
import { NotFoundError } from "../utils/errors/app.error";

export async function createHotel(hotel: CreateHotelDto): Promise<Hotel> {
    const createdHotel = await Hotel.create(hotel);
    logger.info(`Hotel created successfully: ${createdHotel.id}`);
    return createdHotel;
}


export async function getHotelById(id: number): Promise<Hotel> {
    const hotel = await Hotel.findByPk(id);
    if (!hotel) {
        logger.error(`Hotel not found: ${id}`);
        throw new NotFoundError(`Hotel not found: ${id}`);
    }

    logger.info(`Hotel found: ${hotel.id}`);
    return hotel;
}

export async function getAllHotels(): Promise<Hotel[]> {
    const hotels = await Hotel.findAll({
        where:{
            deletedAt:null
        }
    });
    logger.info(`Fetched ${hotels.length} hotels`);
    return hotels;
}

export async function updateHotel(id: number, hotel: UpdateHotelDto): Promise<Hotel> {
    const existingHotel = await getHotelById(id);
    const updatedHotel = await existingHotel.update(hotel);
    logger.info(`Hotel updated successfully: ${updatedHotel.id}`);
    return updatedHotel;
}


export async function softDeleteHotel(id: number): Promise<void> {
    const existingHotel = await getHotelById(id);
    
     if(!existingHotel){
        logger.error(`Hotel not found: ${id}`);
        throw new NotFoundError(`Hotel not found: ${id}`);
     }

     existingHotel.deletedAt = new Date();
     await existingHotel.save();
     logger.info(`Hotel soft deleted successfully: ${id}`);
}
 