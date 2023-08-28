
const {Support, User} = require("../models");

exports.postMsg = async (req, res) => {
    console.log(req.body.payload);
    const {
        supporter_id,
        supporter_name,
        supporter_email,
        content
    } = req.body.payload;

    const newSupport = new Support({supporter_id, supporter_name, supporter_email, content});
    await newSupport.save();
    return res.json({msg: "Success"});
}


exports.getMsg = async (req, res) => {
    const msgs = await Support.find({});
    return res.json({msgs});
}