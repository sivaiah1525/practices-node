const mongoose = require('mongoose');
const Schema =mongoose.Schema;



var UserSchema=new Schema({
     fname:String,
     lname:String,
     date_of_barth:Number,
     phnum:Number,
     password:String,
     cfmpassword:String
})
const User = mongoose.model('user', UserSchema);
module.exports = User;