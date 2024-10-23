import { Router } from "express";
import { UserController } from "../controller";
import { userValidations } from "../validations/userValidation";
import { validate } from "../middleware/validate";
import { CityController } from "../controller/city-controller";
const routes = Router();

routes.route("/add-user").post(userValidations, validate, UserController.handleAddUserController)
routes.route("/vehicle").post(UserController.handleAddVehicleController)

routes.route("/vehicles").get(UserController.handleGetAllVehiclesController)

routes.route("/add-booking").post(CityController?.handleAddBookingController)

routes.route("/bookings").get(CityController.fetchBookingsController)




export default routes;