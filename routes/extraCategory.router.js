const { Router } = require("express");
const { extra_create, addextracatepage } = require("../controllers/extraCategory.controller");


const extraCat_router = Router();
extraCat_router.get('/addextracategory', addextracatepage);
extraCat_router.post('/addextracategory', extra_create);

module.exports = extraCat_router;

