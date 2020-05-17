const express = require("express");
const router = express.Router();

const portfolioCtrl = require("../controllers/portfolio");
const {
  requireSignin,
  adminMiddleware,
} = require("../controllers/auth/middleware");

router.post("", requireSignin, adminMiddleware, portfolioCtrl.savePortfolio);

router.get("", portfolioCtrl.getPortfolios);

router.get("/:id", portfolioCtrl.getPortfolioById);

router.patch(
  "/:id",
  requireSignin,
  adminMiddleware,
  portfolioCtrl.updatePortfolio
);

router.delete(
  "/:id",
  requireSignin,
  adminMiddleware,
  portfolioCtrl.deletePortfolio
);

module.exports = router;
