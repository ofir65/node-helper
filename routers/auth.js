const router = require("express").Router(),
  { auth } = require("../controllers"),
  { validators, verifiers } = require("../middlewares");

/**
 * @route api/signUp
 * @method POST
 * @access Public
 */
router.post("/signup", validators.signUp, auth.signUp);

/**
 * @route api/signIn
 * @method GET, POST
 * @access Public
 */
router.get("/signin", verifiers.auth, auth.getUser);
router.post("/signin", validators.signIn, auth.signIn);

module.exports = router;
