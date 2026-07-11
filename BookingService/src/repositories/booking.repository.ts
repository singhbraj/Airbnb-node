import prisma from "../prisma/client";
import { Booking, Prisma } from "../generated/prisma/client";
import { validate as isValidUUID } from "uuid";
import { BadRequestError, NotFoundError } from "../utils/errors/app.error";
import { IdempotencyKeyModel } from "../generated/prisma/models";

export async function createBooking(bookingInput: Prisma.BookingCreateInput): Promise<Booking> {
    const booking = await prisma.booking.create({
        data: bookingInput
    });
    return booking;
}

export async function createIdempotencyKey(key: string, bookingId: number) {

    const idempotencyKey = await prisma.idempotencyKey.create({
        data: {
            key,
            booking: {
                connect: {
                    id: bookingId
                }
            }

        }
    });
    return idempotencyKey;
}

    export async function getIdempotencyKeyWithLock(tx: Prisma.TransactionClient = prisma,key: string) {
        if(!isValidUUID(key)){
            throw new BadRequestError("Invalid idempotency key");
        }
    const idempotencyKey:Array<IdempotencyKeyModel> = await tx.$queryRaw`SELECT * FROM idempotency_keys WHERE key = ${key} FOR UPDATE`;
    console.log("idempotencyKey",idempotencyKey);
    if(!idempotencyKey || idempotencyKey.length === 0){
        throw new NotFoundError("Idempotency key not found");
    }
    return idempotencyKey[0];
}

export async function getBookingById(id: number) {
    const booking = await prisma.booking.findUnique({
        where: {
            id
        }
    });
    return booking;
 }


export async function confirmBooking(tx: Prisma.TransactionClient = prisma,id: number) {
    const booking = await tx.booking.update({
        where: {
            id
        },
        data: {
            status: "CONFIRMED"
        }
    });
    return booking;
}

export async function finalizeIdempotencyKey(tx: Prisma.TransactionClient = prisma, id: number) {
    const idempotencyKey = await tx.idempotencyKey.update({
        where: {
            id
        },
        data: {
            finalized: true
        }
    }); 
    return idempotencyKey;
}