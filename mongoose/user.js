const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const userschema = new Schema({
    name: { type: String },
    age: { type: Number }
})


module.exports = mongoose.model('userdetails', userschema);


