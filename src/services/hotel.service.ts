import { CreateHotelDto } from "../dto/hotel.dto";
import { createHotel, getHotelById } from "../repositories/hotel.repository";

export async function createHotelService(hotel: CreateHotelDto){

    const createdHotel = await createHotel(hotel);
    return createdHotel;
}


export async function getHotelByIdService(id: number){
    const hotel = await getHotelById(id);
    return hotel;
}