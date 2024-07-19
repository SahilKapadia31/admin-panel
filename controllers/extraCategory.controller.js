const extraCatModel = require("../models/extraCategorySchema")

const addextracatepage = async (req, res) => {
  try {
    let extracat = await extraCatModel.find();
    res.render("addextracat", { extracat, messages: req.flash("flashMsg") });
  } catch (error) {
    console.log(error);
  }
};

const extra_create = async (req, res) => {
  let { extracat_name } = req.body
  await extraCatModel.create({ extracat_name });
  req.flash("flashMsg", "extCatAdded");
  return res.redirect("/");
};

module.exports = { addextracatepage, extra_create }