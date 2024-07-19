const subCategoryModel = require("../models/subCategorySchema");

const addsubcatepage = async (req, res) => {
  try {
    let subcat = await subCategoryModel.find();
    res.render("addsubcat", { subcat, messages: req.flash("flashMsg") });
  } catch (error) {
    console.log(error);
  }
};
const subCat_create = async (req, res) => {
  try {
    let { subcat_name } = req.body
    await subCategoryModel.create({ subcat_name });
    req.flash("flashMsg", "subCatAdded");
    return res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};
const updatextaCat = async (req, res) => {
  let { id } = req.params;
  let extracat = await subCategoryModel.findById(id);
  extracat.extraCategoryId = req.body.extraCategoryId;
  extracat.save();
  res.send(extracat);
};


const getExtacatData = async (req, res) => {
  let data = await subCategoryModel.find().populate("extraCategoryId");
  res.send(data);
};




module.exports = { subCat_create, updatextaCat, getExtacatData, addsubcatepage }