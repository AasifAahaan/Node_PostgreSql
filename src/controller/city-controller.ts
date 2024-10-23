import { Request, Response } from "express";
import City from "../model/city";
import Booking from "../model/booking";

export class CityController {
    static async handleAddBookingController(req: Request, res: Response) {
        try {
            const {
                firstName,
                lastName,
                number,
                email,
                address,
                city,
                state,
                option,
                pickupLocation,
                pickupDateTime,
                dropDateTime,
                paymentMethod,
                paymentType
            } = req.body;

            const data = await Booking.create({
                firstName,
                lastName,
                number,
                email,
                address,
                city,
                state,
                option,
                pickupLocation,
                pickupDateTime,
                dropDateTime,
                paymentMethod,
                paymentType
            });

            res.status(201).json({ message: 'Booking added successfully', data: data });
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }

    static async fetchBookingsController(req: Request, res: Response) {
        try {
            const response = await Booking.findAll();
            res.status(200).json({ success: true, response })
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }
}