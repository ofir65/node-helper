module.exports = {
    // Verify authenticate state and token
    auth: require("passport").authenticate("jwt", { session: false }),
  
    // Verify authorization
    admin: (req, res, next) => {
      if (req.user.level !== 0)
        return res.status(401).json({ error: "You are not a administrator." });
      else next();
    },
    elder: (req, res, next) => {
      if (req.user.level !== 1)
        return res.status(401).json({ error: "You are not a elderly." });
      else next();
    },
    volunteer: (req, res, next) => {
      if (req.user.level !== 2)
        return res.status(401).json({ error: "You are not a volunteer." });
      else next();
    }
  };
  