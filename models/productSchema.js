const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  image: String,
  productname: String,
  productprice: Number,
  description: String,
  subCategoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'subCategoryTbl'
  },
  extraCategoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "extraCatTbl",
  },
  CategoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'categoryTbl'
  }

});

const ProductDB = mongoose.model("ProductTbl", ProductSchema);

module.exports = ProductDB;
