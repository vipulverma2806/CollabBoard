const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  updateUserProfile,
  getUserProfile,
} = require("../controllers/authController");
const {protect} = require("../middlewares/authMiddleware")

router.post("/register", registerUser);
router.post("/login", loginUser);
router.put("/profile", protect, updateUserProfile);
router.get("/profile", protect, getUserProfile);

module.exports = router;
