const LocalStrategy = require('passport-local').Strategy
const userDb = require('../models/user.schema')

const userAuth = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
}


const localAuth = (passport) => {
    passport.use(new LocalStrategy(async (username, password, done) => {
        console.log(username, password)
        try {
            let user = await userDb.findOne({ username: username });
            console.log(user)
            if (!user) {
                return done(null, false, { message: 'Incorrect username.' });
            }
            if (user.password != password) {
                return done(null, false, { message: 'Incorrect password.' });
            }
            return done(null, user, { message: `Welcome ${user.username}` });
        } catch (error) {
            return done(error);
        }
    }));

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser(async (id, done) => {
        try {
            const user = await userDb.findById(id);
            done(null, user);
        } catch (error) {
            done(error, null);
        }
    });
}



const isAuth = (req, res, next) => {
    // let { user } = req.cookies;
    if (req.user) {
        return next();
    } else {
        return res.redirect("/login");
    }
};


module.exports = { localAuth, userAuth, isAuth };