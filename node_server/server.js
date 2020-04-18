const express = require('express');
const app = express();
const port = 3001;
const bodyParser = require('body-parser');
const cors=require('cors');

app.use(cors());
app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({ extended: true }));
const User = require('./models').User;



app.post('/user/userdetails', async function (req, res) {
   try {
     console.log(req.body);
     const body = req.body;
     const newUser = new User(body);
     const  result = await newUser.save();
     res.json(result)
   } catch (error) {
        res.status(400).send('bad request');
   }
})


app.listen(port, console.log("app port is " + "" + port));

