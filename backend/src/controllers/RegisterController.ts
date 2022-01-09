import { Request, Response } from "express";
import { registerService } from "../services/RegisterService";
import { isBoolean, isInteger } from "../utils";

export default {
    async insertRegisterDateTime(req: Request, res: Response) {
        let dateTime = req?.body?.dateTime
        let entryTime = req?.body?.entryTime

        if (!isInteger(dateTime)) {
            return res.status(400).json({
                status: 400,
                message: "dateTime must be present"
            })
        }

        if (!isBoolean(entryTime)) {
            return res.status(400).json({
                status: 400,
                message: "entryTime must be present and should be a boolean type"
            })
        }

        let registerResponse: any = await registerService.insertRegisterDateTime(dateTime, entryTime);

        return res.status(201).json({
            status: 201,
            message: "Created",
            response: registerResponse
        })
    }
}
