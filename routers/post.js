const router = require("express").Router(),
{posts} = require("../controllers"),
{validators, verifiers} = require("../middlewares");


router.post("/",  posts.createPost);
router.get("/", posts.getPosts);
router.get("/:id", posts.getPost);


module.exports = router;