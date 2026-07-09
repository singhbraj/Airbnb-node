import prisma from "../prisma/client";
import { Booking, Prisma } from "../generated/prisma/client";

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

export async function GetIdempotencyKey(key: string) {
    const idempotencyKey = await prisma.idempotencyKey.findUnique({
        where: {
            key
        }
    });
    return idempotencyKey;
}

export async function getBookingById(id: number) {
    const booking = await prisma.booking.findUnique({
        where: {
            id
        }
    });
    return booking;
}


export async function confirmBooking(id: number) {
    const booking = await prisma.booking.update({
        where: {
            id
        },
        data: {
            status: "CONFIRMED"
        }
    });
    return booking;
}

export async function finalizeIdempotencyKey(id: number) {
    const idempotencyKey = await prisma.idempotencyKey.update({
        where: {
            id
        },
        data: {
            finalized: true
        }
    });
    return idempotencyKey;
}