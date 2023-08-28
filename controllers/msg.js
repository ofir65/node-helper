






const {Post, User, Msg} = require("../models");

exports.newMsg = async (req, res) => {
    console.log(req.body.payload);
    const {
        post_id,
        from,
        to,
        content
    } = req.body.payload;

    const newMsg = new Msg({post_id, from, to, content});
    await newMsg.save();
    return res.json({msg: "Success"});
}

exports.getMsg = async (req, res) => {

    
    console.log("Hello" + req.params.id);
    const msgs = await Msg.find({post_id: req.params.id}).populate("to");
    return res.json({msgs});
}