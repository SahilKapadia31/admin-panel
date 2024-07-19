const productDb = require('../models/productSchema');
const userDb = require('../models/user.schema');

const mailer = require('nodemailer');

// GET DATA SECTION

const home = async (req, res) => {
    try {
        let data = await productDb.find();
        return res.render("Dashboard", { products: data })
    } catch (err) {
        console.log(err)
    }
}

const signUpPage = (req, res) => {
    return res.render("signup")
}

const loginPage = (req, res) => {
    return res.render("login")
}

const forgotPassword = (req, res) => {
    return res.render("Sendotp")
}

const newPassword = (req, res) => {
    return res.render('Forgot')
}

const logout = (req, res) => {
    req.logOut((err) => {
        if (err) {
            console.log(err);
            return false;
        }
        console.log('logout Successfully');
        return res.redirect('/login')
    })
};

// POST DATA SECTION

const signUp = async (req, res) => {
    await userDb.create(req.body);
    req.flash('success_msg', 'You are now registered and can log in');
    return res.redirect('/login')
}

const logIn = async (req, res) => {
    const { email, password } = req.body
    let user = await userDb.findOne({ email: email })

    if (user && user.password === password) {
        return res.redirect('/')
    } else {
        return res.redirect('/login')
    }
}

const OTP = Math.floor(1000 + Math.random() * 9000)

const sendOtp = async (req, res) => {
    const { email } = req.body
    try {
        const transporter = await mailer.createTransport({
            service: "gmail",
            auth: {
                user: "sahilkapadia89@gmail.com",
                pass: "rmnoauuiyyphjsbt"
            }
        })

        const createMail = {
            from: "sahilkapadia89@gmail.com",
            to: req.body.email,
            subject: "Reset Password",
            html: `<h1>OTP ${OTP}</h1>`
        }

        transporter.sendMail(createMail, (err, info) => {
            if (err) {
                console.log(err);
            } else {
                console.log(info);
            }
        })
        return res.redirect('/new-password')
    } catch (error) {
        console.log("🚀 ~ sendOtp ~ error:", error)
    }
}

const verifyOtp = async (req, res) => {
    const { email, newPassword, confpassword, otp } = req.body

    let user = await userDb.findOne({ email: email })
    let { id } = user

    if (newPassword == confpassword) {
        if (otp == OTP) {
            await userDb.findByIdAndUpdate(id, { password: newPassword })
            return res.redirect('/login')
        } else {
            return res.redirect('/forgot-password')
        }
    } else {
        console.log("New Pass and Confirm Pass does not match.")
    }
}


module.exports = { home, signUpPage, loginPage, signUp, logIn, forgotPassword, sendOtp, verifyOtp, newPassword, logout }