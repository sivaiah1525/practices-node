const express = require('express');
const app = express();
const port = 4000;
const  bodyParser = require('body-parser')
// const db = require('./db')
const mongoose = require('mongoose');

(async function () {
    try {
        await mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('db connected')
    } catch (error) {
        console.log('connection failed')
    }
})();

const db = mongoose.connection
const models = require('./models');
const UserModel = models.User;

const dummyData = {
    email: 'test@email.com',
    password: 'test'
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ encoded: true }));

const url="/user/userdetails"
 app.post(url,(req,res)=>{
    res.json(req.body)
    console.log(res.json(req.body));
});


// body of data


// const newUser = new UserModel(dummyData);
// const t = newUser.save();

app.listen(port, () => console.log("App Listen port @" + " " + port));