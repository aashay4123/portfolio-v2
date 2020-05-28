const express = require("express");
const router = express.Router();

const projectCtrl = require("../controllers/project");
const {
  requireSignin,
  adminMiddleware,
} = require("../controllers/auth/middleware");

router.post("", requireSignin, adminMiddleware, projectCtrl.saveproject);

router.get("", projectCtrl.getprojects);

router.get("/:id", projectCtrl.getprojectById);

router.patch("/:id", requireSignin, adminMiddleware, projectCtrl.updateproject);

router.delete(
  "/:id",
  requireSignin,
  adminMiddleware,
  projectCtrl.deleteproject
);

module.exports = router;
