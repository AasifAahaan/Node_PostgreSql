import { Router } from "express";
import { UserController } from "../controller";
import { userValidations } from "../validations/userValidation";
import { validate } from "../middleware/validate";
const routes = Router();

routes.route("/add-user").post(UserController.handleAddUserController)


export default routes;