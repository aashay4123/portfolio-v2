const express = require("express");
const router = express.Router();

const blogCtrl = require("../controllers/blog");
const {
  requireSignin,
  adminMiddleware,
} = require("../controllers/auth/middleware");

router.get("", blogCtrl.getBlogs);

router.get("/me", requireSignin, adminMiddleware, blogCtrl.getUserBlogs);

router.get("/:id", blogCtrl.getBlogById);

router.get("/s/:slug", blogCtrl.getBlogBySlug);

router.post("", requireSignin, adminMiddleware, blogCtrl.createBlog);

router.patch("/:id", requireSignin, adminMiddleware, blogCtrl.updateBlog);

router.delete("/:id", requireSignin, adminMiddleware, blogCtrl.deleteBlog);

module.exports = router;
