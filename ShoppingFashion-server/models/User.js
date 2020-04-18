const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// UserSchema
var UserSchema = new Schema({
     name: String,
     email: String,
     select: String,
     password: String,
     cfmpassword: String
})

// productSchema

var productSchema = new Schema({
     productType: String,
     img: String,
     productname: String,
     description: String,
     price: Number,
     totalCount: Number
})

const User = mongoose.model('user', UserSchema);
const Product = mongoose.model('product', productSchema);
module.exports = {
     User,
     Product
};