const { Router } = require("express");
const { home, loginPage, signUpPage, signUp, logIn, forgotPassword, verifyOtp, sendOtp, newPassword } = require("../controllers/admin.controller");
const { userAuth } = require("../middleware/auth");
const passport = require("passport");


const router = Router();

// GET

router.get('/', userAuth, home);
router.get('/login', loginPage)
router.get('/signup', signUpPage)
router.get('/forgot-password', forgotPassword)
router.get('/new-password', newPassword)

// POST

router.post('/signup', signUp)
router.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'
}));
router.post('/sendOtp', sendOtp)
router.post('/verifyOtp', verifyOtp)

module.exports = router