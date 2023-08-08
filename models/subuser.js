const mongoose = require('mongoose');

const subuserSchema = new mongoose.Schema({
    username: { type: String, required: true },
    gender:{type:String,required: true},
    measurements :{type:Object,required:true},
    icon :{type:String},
    sizeincompany : {type:Object}
});

module.exports = mongoose.model('Subuser', subuserSchema);
