const express = require("express");
const router = express.Router();
const {
  userSignupValidator,
  userSigninValidator,
  resetPasswordValidator,
  forgotPasswordValidator,
} = require("../validators/auth");
const { runValidation } = require("../validators");

const {
  signup,
  signin,
  accountActivation,
  forgotPassword,
  resetPassword,
} = require("../controllers/auth/auth");
const { googleLogin, facebookLogin } = require("../services/services");

router.post("/signup", userSignupValidator, runValidation, signup);
router.post("/account_activate", accountActivation);
router.post("/signin", userSigninValidator, runValidation, signin);

//forgot reset routes
router.put(
  "/forgot-password",
  forgotPasswordValidator,
  runValidation,
  forgotPassword
);
router.put(
  "/reset-password",
  resetPasswordValidator,
  runValidation,
  resetPassword
);
router.post("/google-login", googleLogin);
router.post("/facebook-login", facebookLogin);
module.exports = router;
