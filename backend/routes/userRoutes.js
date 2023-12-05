import express from "express";
import {
  postResult,
  getUser,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";

const router = express.Router();

router
  .route("/")
  .post(postResult)
  .get(getUser)
  .put(updateUser)
  .delete(deleteUser);

export default router;
