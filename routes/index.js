const isLoggedIn = require("../middleware/isLoggedIn");

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


router.get("/follow-list",isLoggedIn,require('./follow.routes'))


module.exports = router;

