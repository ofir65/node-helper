const {Post, User} = require("../models");

exports.createPost = async (req, res) => {
    console.log("Helo world" + req.body.payload);
    const owner = req.user._id;
    const {
        name, 
        participants, 
        themeskind, 
        themescontent,
        date,
        address,
        phone,
    } = req.body.payload;
    const status = 0,
        volun_id = {};
    const newPost = new Post({name, participants, themeskind, themescontent, date, address, phone, status, volun_id: owner , elder_id: owner});
    await newPost.save();
    return res.json({msg: "success"});
}

exports.getPosts = async (req, res) => {
    console.log(req.user._id);
    const posts = await Post.find({elder_id: req.user._id}).populate("volun_id");
    return res.json(posts);    
}

exports.getPost = async (req, res) => {
    console.log(req.params.id);
    const post = await Post.find({_id: req.params.id}).populate("volun_id").populate("elder_id");
    return res.json(post);    
}

exports.getAllPosts = async (req, res) => {
    const posts = await Post.find({});
    return res.json(posts);
}

exports.setTaking = async (req, res) => {
    console.log(req.body);
    console.log(req.user._id);
    await Post.findOneAndUpdate({ _id: req.body.payload }, { volun_id: req.user._id, status: 1 });
}
exports.unsetTaking = async (req, res) => {
    console.log(req.body);
    console.log(req.user._id);
    await Post.findOneAndUpdate({ _id: req.body.payload }, { status: 0 });
}