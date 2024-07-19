const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  cat_name: String,
  subCategoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "subCategoryTbl",
  },
});

const categoryModel = mongoose.model("categoryTbl", categorySchema);

module.exports = categoryModel;
