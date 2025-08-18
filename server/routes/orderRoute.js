import {
  getAllOrders,
  getUserOrders,
  placeOrderCOD,
  placeOrderStripe,
} from "../controllers/orderController.js";
import authSeller from "../middlewares/authSeller.js";
import authUser from "../middlewares/authUser.js";
import express from "express";

const orderRouter = express.Router();

orderRouter.post("/cod", authUser, placeOrderCOD);
orderRouter.get("/user", authUser, getUserOrders);
orderRouter.get("/seller", authSeller, getAllOrders);
orderRouter.post("/stripe", authUser, placeOrderStripe);

export default orderRouter;
