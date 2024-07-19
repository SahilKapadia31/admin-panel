const { Router } = require("express");
const { subCat_create, getExtacatData, updatextaCat, addsubcatepage } = require("../controllers/subCategory.controller");

const subCat_router = Router();
subCat_router.get('/addsubcategory', addsubcatepage)
subCat_router.post('/addsubcategory', subCat_create);
subCat_router.patch('/update/:id', updatextaCat);
subCat_router.get('/data', getExtacatData)

module.exports = subCat_router;
