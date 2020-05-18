const express = require("express");
const router = express.Router();

const blogCtrl = require("../controllers/blog");
const {
  requireSignin,
  adminMiddleware,
} = require("../controllers/auth/middleware");

router.get("", blogCtrl.getBlogs);

router.get("/me", requireSignin, blogCtrl.getUserBlogs);

router.get("/:id", blogCtrl.getBlogById);

router.get("/s/:slug", blogCtrl.getBlogBySlug);

router.post("", requireSignin, blogCtrl.createBlog);

router.patch("/:id", requireSignin, blogCtrl.updateBlog);

router.delete("/:id", requireSignin, blogCtrl.deleteBlog);

module.exports = router;
