import { Router } from "express";
import { UserController } from "../controller";
import { userValidations } from "../validations/userValidation";
import { validate } from "../middleware/validate";
const routes = Router();

routes.route("/add-user").post(userValidations, validate, UserController.handleAddUserController)
routes.route("/vehicle").post(UserController.handleAddVehicleController)


export default routes;