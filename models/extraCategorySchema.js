const mongooes = require('mongoose');

const extraCatSchema = new mongooes.Schema({
    extracat_name: String,

});

const extraCatModel = mongooes.model('extraCatTbl', extraCatSchema);

module.exports = extraCatModel;