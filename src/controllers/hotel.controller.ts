import { NextFunction, Request, Response } from "express";
import { createHotelService, getHotelByIdService } from "../services/hotel.service";

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