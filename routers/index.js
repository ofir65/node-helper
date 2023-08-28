const router = require("express").Router();
const { verifiers } = require("../middlewares");

router.use("/", require("./auth"));
router.use("/post", verifiers.auth, require("./post"));
router.use("/posts", verifiers.auth, require("./posts"));
router.use("/msg", verifiers.auth, require("./msg"));
router.use("/support", verifiers.auth , require("./support"));
router.use("/admin", verifiers.auth , require("./admin"));

module.exports = router;
