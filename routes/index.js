const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  const isLogin = !!req.session.user 
  res.render("index", {
    isLogin
  });
});
router.get("/auth", require('./auth'))

router.get("/wanted",require('./wanted.routes'))
module.exports = router;
