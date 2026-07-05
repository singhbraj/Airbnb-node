import { NextFunction, Request, Response } from "express";
import { createHotelService, deleteHotelService, getAllHotelsService, getHotelByIdService, updateHotelService } from "../services/hotel.service";

export async function createHotelHandler(req: Request, res: Response, next: NextFunction) {

    // 1. Call the serive layer
    const hotel = await createHotelService(req.body);

    // 2. Send the response to the client
    res.status(201).json({
        message: "Hotel created successfully",
        data: hotel,
        status: "success",
    });
}

export async function getHotelByIdHandler(req: Request, res: Response, next: NextFunction) {
    const hotel = await getHotelByIdService(Number(req.params.id));

    // 2. Send the response to the client
    res.status(200).json({
        message: "Hotel found successfully",
        data: hotel,
        status: "success"
    });
}

export async function getAllHotelHandler(req: Request, res: Response, next: NextFunction) {
    const hotels = await getAllHotelsService();

    // 2. Send the response to the client
    res.status(200).json({
        message: "Hotels fetched successfully",
        data: hotels,
        status: "success"
    });
}

export async function updateHotelHandler(req: Request, res: Response, next: NextFunction) {
    const hotel = await updateHotelService(Number(req.params.id), req.body);

    // 2. Send the response to the client
    res.status(200).json({
        message: "Hotel updated successfully",
        data: hotel,
        status: "success"
    });
}

export async function deleteHotelHandler(req: Request, res: Response, next: NextFunction) {
    await deleteHotelService(Number(req.params.id));

    // 2. Send the response to the client
    res.status(200).json({
        message: "Hotel deleted successfully",
        status: "success"
    });
}