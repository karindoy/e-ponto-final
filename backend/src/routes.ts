import { Router } from "express";
import RegisterController from "./controllers/RegisterController";

const routes = Router();

routes.post("/register", RegisterController.insertRegisterDateTime);

export default routes;

