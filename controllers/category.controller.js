
const categoryModel = require("../models/categorySchema");

const addCatepage = async (req, res) => {
  try {
    let cat = await categoryModel.find();
    res.render("addCat", { cat, messages: req.flash("flashMsg") });
  } catch (error) {
    console.log(error);
  }
};
const addcat = async (req, res) => {
  try {
    let { cat_name } = req.body
    await categoryModel.create({ cat_name });
    req.flash("flashMsg", "CatAdded");
    return res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

const updateData = async (req, res) => {
  let { id } = req.params;
  let cat = await categoryModel.findById(id);
  cat.subCategoryId = req.body.subCategoryId;
  cat.save();
  res.send(cat);
};

const getData = async (req, res) => {
  let data = await categoryModel.find().populate({
    path: "subCategoryId", populate: {
      path: "extraCategoryId"
    }
  });
  res.send(data);
};

module.exports = { addCatepage, updateData, getData, addcat };
