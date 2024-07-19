const { Router } = require("express");
const { productPage, addProduct, getData, deleteProduct, updateProduct, editProduct } = require("../controllers/product.controller");
const P_router = Router();

P_router.get("/addProduct", productPage);
P_router.post("/addProduct", addProduct);
P_router.get("/data", getData);
P_router.get("/delete/:id", deleteProduct);
P_router.get("/editProduct/:id", editProduct)
P_router.post("/update", updateProduct);

module.exports = { P_router };
