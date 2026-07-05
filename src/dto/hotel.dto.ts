export type CreateHotelDto = {
name: string;
address: string;
location: string;
rating?: number;
ratingCount?: number;
}

export type UpdateHotelDto = Partial<CreateHotelDto>;