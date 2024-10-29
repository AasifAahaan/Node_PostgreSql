import { Request, Response } from "express";
import Booking from "../model/booking";
import { Op } from "sequelize";

export class BookingController {
    static async handleAddBookingController(req: Request, res: Response) {
        try {
            const {
                firstName,
                lastName,
                number,
                email,
                address,
                category,
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
                category,
                city,
                state,
                option,
                pickupLocation,
                pickupDateTime,
                // dropDateTime,
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

    static async deleteBookingByIdController(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const booking = await Booking.findByPk(id);
            if (!booking) {
                return res.status(404).json({ message: 'Booking not found' });
            }
            await booking.destroy();
            res.status(200).json({ message: 'Booking deleted successfully' });
        } catch (error) {
            console.error('Error deleting booking:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    static async searchController(req: Request, res: Response) {
        const { key } = req.params;

        try {
            const users = await Booking.findAll({
                where: {
                    [Op.or]: [
                        { firstName: { [Op.iLike]: `%${key}%` } },
                        { lastName: { [Op.iLike]: `%${key}%` } },
                        { email: { [Op.iLike]: `%${key}%` } }
                    ]
                }
            });

            if (users.length === 0) {
                return res.status(404).json({ message: 'No users found' });
            }

            res.status(200).json(users);
        } catch (error) {
            console.error('Error searching users:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    static async getBookingById(req: Request, res: Response) {
        const { id } = req.params;

        try {
            const booking = await Booking.findByPk(id);

            if (!booking) {
                return res.status(404).json({ error: 'Booking not found' });
            }

            return res.json(booking);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'An error occurred while retrieving the booking' });
        }
    }

    static async updateBookingById(req: Request, res: Response) {
        const { id } = req.params;
        const updateData = req.body;

        try {
            const [updatedRows] = await Booking.update(updateData, {
                where: {
                    id: id,
                },
            });

            if (updatedRows > 0) {
                res.status(200).json({ message: `Booking with ID ${id} updated successfully.` });
            } else {
                res.status(404).json({ message: `Booking with ID ${id} not found or no changes made.` });
            }
        } catch (error: any) {
            console.error('Error updating booking:', error);
            res.status(500).json({ message: 'Internal Server Error', error: error.message });
        }
    }
}