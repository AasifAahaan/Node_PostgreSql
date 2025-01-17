import { Request, Response } from "express";
import State from "../model/state";
import PostOffice from "../model/postOffice";

export class StateController {
    static async handleSaveStatesController(req: Request, res: Response) {
        try {
            for (const [abbreviation, name] of Object.entries(statesData)) {
                await State.create({ abbreviation, name });
            }
            res.status(201).send('States saved to the database successfully!');
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }

    static async fetchStatesController(req: Request, res: Response) {
        try {
            const response = await State.findAll();
            res.status(200).json({ success: true, response })
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }

    static async addPostOffice(req: Request, res: Response) {
        // try {
        //     const bulkData = req.body;
        //     console.log({ bulkData })

        //     if (!Array.isArray(bulkData) || bulkData.length === 0) {
        //         return res.status(400).json({ message: 'Invalid data format' });
        //     }

        //     // Perform bulk insertion
        //     const result = await PostOffice.bulkCreate(bulkData, { validate: true });

        //     res.status(200).json({
        //         message: 'Bulk data uploaded successfully',
        //         insertedRecords: result.length,
        //     });
        // } catch (error) {
        //     console.error('Error uploading bulk data:', error);
        //     res.status(500).json({ message: 'Failed to upload bulk data', error });
        // }

        try {
            const bulkData = req.body;
            const CHUNK_SIZE = 10000;

            for (let i = 0; i < bulkData.length; i += CHUNK_SIZE) {
                const chunk = bulkData.slice(i, i + CHUNK_SIZE);
                await PostOffice.bulkCreate(chunk, { validate: true });
            }

            res.status(200).send({ message: "Data uploaded successfully!" });
        } catch (error) {
            console.error(error);
            res.status(500).send({ error: "Error uploading data" });
        }
    }
}




















































const statesData = {
    "AN": "Andaman and Nicobar Islands",
    "AP": "Andhra Pradesh",
    "AR": "Arunachal Pradesh",
    "AS": "Assam",
    "BR": "Bihar",
    "CG": "Chandigarh",
    "CH": "Chhattisgarh",
    "DN": "Dadra and Nagar Haveli",
    "DD": "Daman and Diu",
    "DL": "Delhi",
    "GA": "Goa",
    "GJ": "Gujarat",
    "HR": "Haryana",
    "HP": "Himachal Pradesh",
    "JK": "Jammu and Kashmir",
    "JH": "Jharkhand",
    "KA": "Karnataka",
    "KL": "Kerala",
    "LA": "Ladakh",
    "LD": "Lakshadweep",
    "MP": "Madhya Pradesh",
    "MH": "Maharashtra",
    "MN": "Manipur",
    "ML": "Meghalaya",
    "MZ": "Mizoram",
    "NL": "Nagaland",
    "OR": "Odisha",
    "PY": "Puducherry",
    "PB": "Punjab",
    "RJ": "Rajasthan",
    "SK": "Sikkim",
    "TN": "Tamil Nadu",
    "TS": "Telangana",
    "TR": "Tripura",
    "UP": "Uttar Pradesh",
    "UK": "Uttarakhand",
    "WB": "West Bengal"
};