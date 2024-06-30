import { Request, Response } from "express";
import User from "../model/user";
import bcrypt from 'bcryptjs';
import Vehicle, { VehicleAttributes } from "../model/vehicle";

export class UserController {
    static async handleAddUserController(req: Request, res: Response) {
        try {
            const { name, email, mobile, password, address } = req.body;
            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = await User.create({ name, email, mobile, password: hashedPassword, address });
            const response = newUser.toJSON();
            res.status(201).json({ success: true, message: "User created successfully..", response });
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }

    static async handleAddVehicleController(req: Request, res: Response) {
        try {
            const data: VehicleAttributes = req.body;
            const vehicle = await Vehicle.create(data);
            res.status(201).json(vehicle);
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }

    static async handleGetAllVehiclesController(req: Request, res: Response) {
        try {
            const response = await Vehicle.findAll();
            res.status(200).json({ success: true, response })
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }
}