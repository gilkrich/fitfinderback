const mongoose = require('mongoose');

const shirtsagetwoboySchema = new mongoose.Schema({
    productname: { type: String, required: true },
    productimage: { type: String, required: true },
    productfit: { type: String, required: true },
    producturl:{type:String,required: true},
    companyname : {type:String,required:true}
});

module.exports = mongoose.model('Shirtstwoboys', shirtsagetwoboySchema);