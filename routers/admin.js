const router = require("express").Router(),
{admin} = require("../controllers");

router.get("/users",  admin.getUsers);
router.get("/posts", admin.getPosts);

module.exports = router;