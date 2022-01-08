import { Request, Response } from "express";
import { registerService } from "../services/RegisterService";

export default {
    async insertRegisterDateTime(req: Request, res: Response) {
        let dateTime = req?.body?.dateTime

        if (!dateTime) {
            console.log("aaaaa")
            return res.status(400).json({
                status: 400,
                message: "dateTime must be present"
            })
        }

        dateTime = await registerService.insertRegisterDateTime(dateTime);

        return res.status(201).json({
            status: 201,
            message: "Created",
            dateTime: dateTime
        })
        // return 
    }
}
