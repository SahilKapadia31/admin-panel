const mongoose = require("mongoose");

const subCategorySchema = new mongoose.Schema({
  subcat_name: String,
  extraCategoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "extraCatTbl",
  },
});

const subCategoryModel = mongoose.model("subCategoryTbl", subCategorySchema);

module.exports = subCategoryModel;
