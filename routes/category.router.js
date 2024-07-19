const { Router } = require("express");
const { updateData, getData, addcat, addCatepage } = require("../controllers/category.controller");


const cat_router = Router();
cat_router.get('/addcategory', addCatepage);
cat_router.post('/addcategory', addcat)
cat_router.patch('/update/:id', updateData);
cat_router.get('/data', getData)

module.exports = cat_router