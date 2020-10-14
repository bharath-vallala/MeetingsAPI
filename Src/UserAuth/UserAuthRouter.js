const router = require("express").Router();
const { body } = require("express-validator");
const {
  userRegController,
  userLoginController,
  userLogoutController
} = require("./UserAuthController");

router.post(
  "/register",
  [
    body("name").exists(),
    body("emailId").isEmail().normalizeEmail(),
    body("password").isLength({ min: 4, max: 16 }),
    body("address").exists(),
    body("username").isLength({ min: 4, max: 16 }),
  ],
  userRegController
);

router.post(
  "/login",
  [
    body("emailId").exists().isEmail().normalizeEmail(),
    body("password").isLength({ min: 4, max: 16 }),
  ],
  userLoginController
);
router.post("/logout",userLogoutController)

module.exports = router;
