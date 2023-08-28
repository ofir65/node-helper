const router = require("express").Router(),
{posts} = require("../controllers"),
{validators, verifiers} = require("../middlewares");


router.get("/", posts.getAllPosts);
router.post("/setTaking", posts.setTaking);
router.post("/unsetTaking", posts.unsetTaking);



module.exports = router;