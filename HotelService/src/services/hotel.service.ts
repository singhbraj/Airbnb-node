import { CreateHotelDto, UpdateHotelDto } from "../dto/hotel.dto";
import { createHotel, getAllHotels, getHotelById, softDeleteHotel, updateHotel } from "../repositories/hotel.repository";

export async function createHotelService(hotel: CreateHotelDto){

    const createdHotel = await createHotel(hotel);
    return createdHotel;
}


export async function getHotelByIdService(id: number){
    const hotel = await getHotelById(id);
    return hotel;
}

export async function getAllHotelsService(){
    const hotels = await getAllHotels();
    return hotels;
}

export async function updateHotelService(id: number, hotel: UpdateHotelDto){
    const updatedHotel = await updateHotel(id, hotel);
    return updatedHotel;
}

export async function deleteHotelService(id: number){
    await softDeleteHotel(id);
}