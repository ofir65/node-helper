const router = require("express").Router(),
{msg} = require("../controllers");


router.post("/",  msg.newMsg);
router.get("/:id", msg.getMsg);
// router.get("/:id", posts.getPost);


module.exports = router;