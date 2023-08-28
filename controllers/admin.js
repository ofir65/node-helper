const { User, Post } = require("../models");

exports.getUsers = async (req, res) => {
    const users = await User.find({level: {$ne: 0} });
    return res.json({users});
}

exports.getPosts = async (req, res) => {
    const posts = await Post.find({}).populate("elder_id").populate("volun_id");
    return res.json({posts});
}