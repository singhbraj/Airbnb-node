import prisma from "../prisma/client";
import { Booking, Prisma } from "../generated/prisma/client";

export async function createBooking(bookingInput: Prisma.BookingCreateInput): Promise<Booking> {
    const booking = await prisma.booking.create({
        data: bookingInput
    });
    return booking;
}