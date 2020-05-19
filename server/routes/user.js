const express = require("express");
const router = express.Router();

const { read, update } = require("../controllers/user/user");
const {
  requireSignin,
  adminMiddleware,
} = require("../controllers/auth/middleware");

router.get("/user/:id", requireSignin, read);
router.put("/user/update", requireSignin, update);
router.put("/admin/update", requireSignin, adminMiddleware, update);

module.exports = router;
