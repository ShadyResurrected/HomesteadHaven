import express from "express";
import {
  bookVisit,
  cancelBooking,
  createUser,
  favourites,
  getAllBookings,
  getAllFavourites,
} from "../controllers/userController.js";
const router = express.Router();

router.post("/register", createUser);
router.post("/bookVisit/:id", bookVisit);
router.get("/allbookings", getAllBookings);
router.post("/removeBooking/:id", cancelBooking);
router.post("/toFav/:rid", favourites);
router.post('/allFav',getAllFavourites)

export { router as userRoute };
