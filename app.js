const express = require('express');
const path = require('path');
const db = require('./config/Database');
const router = require('./routes/router');
const passport = require('passport');
const session = require('express-session');
const cookies = require("cookie-parser");
const flash = require('connect-flash')
const { localAuth } = require('./middleware/auth');
const { P_router } = require("./routes/product.router");
const cat_router = require("./routes/category.router");
const subCat_router = require("./routes/subCategory.router");
const extraCat_router = require("./routes/extraCategory.router");

const app = express();

localAuth(passport)

app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/public')));
app.use(flash());
app.use(cookies())

app.use(session({ secret: "private" }))
app.use(passport.initialize());
app.use(passport.session());

app.use(router)
app.use("/product", P_router);
app.use("/category", cat_router);
app.use("/subcategory", subCat_router);
app.use("/extra", extraCat_router);

app.listen(9090, (err) => {
    db();
    err ? console.log("Some thing went wrong") : console.log("sever started on http://localhost:9090")
})