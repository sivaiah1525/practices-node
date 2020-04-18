const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
    }
})

const User = mongoose.model('user', UserSchema);

module.exports = User;