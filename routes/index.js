

const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  const isLogin = !!req.session.user 
  res.render("index", {
    isLogin
  });
});



module.exports = router;

