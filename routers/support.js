const router = require("express").Router(),
{support} = require("../controllers");


router.post("/",  support.postMsg);
router.get("/",  support.getMsg);

module.exports = router;