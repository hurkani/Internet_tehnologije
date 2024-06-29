import express from "express";
import { update, deleteUser, dislike, getUser, like, subscribe, unsubscribe } from "../controllers/user.js"
import { verifyToken } from "../verifyToken.js";

const router = express.Router()

// update user

router.put("/:id", verifyToken, update)

// get user
router.get("/find/:id", getUser)

// delete user
router.delete("/:id",verifyToken, deleteUser)

// subscribe a user
router.put("/sub/:id",verifyToken, subscribe)

// unsubscribe a user
router.put("/unsub/:id",verifyToken, unsubscribe)

// like a video
router.put("/like/:videoId",verifyToken, like)

// dislike a video
router.put("/dislike/:id",verifyToken, dislike)

export default router;

