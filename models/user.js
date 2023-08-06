const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    gender: { type: String, required: true },
    subusers: [
        { type: mongoose.Types.ObjectId, ref: 'Subuser' }
             ],
    measurements: {
       type: Object
                  },
                icon :{type:String,required:true}
});

module.exports = mongoose.model('User', userSchema);

    // personinfo : {type:mongoose.Types.ObjectId,ref:'Cvtemp'}  