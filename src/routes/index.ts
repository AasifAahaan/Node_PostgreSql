import { Router } from "express";
import { UserController } from "../controller";
import { userValidations } from "../validations/userValidation";
import { validate } from "../middleware/validate";
import { BookingController } from "../controller/booking-controller";
import { StateController } from "../controller/state-controller";
const routes = Router();

routes.route("/add-user").post(userValidations, validate, UserController.handleAddUserController)
routes.route("/vehicle").post(UserController.handleAddVehicleController)

routes.route("/vehicles").get(UserController.handleGetAllVehiclesController)

routes.route("/add-booking").post(BookingController?.handleAddBookingController)
routes.route("/bookings").get(BookingController?.fetchBookingsController)
routes.route("/booking/:id").delete(BookingController?.deleteBookingByIdController).put(BookingController?.updateBookingById)
routes.route("/search/:key").get(BookingController?.searchController)

routes.route("/booking/:id").get(BookingController.getBookingById);
+


routes.route("/save-states").post(StateController?.handleSaveStatesController)
routes.route("/fetch-states").get(StateController?.fetchStatesController)




export default routes;