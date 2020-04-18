'use strict';
const express = require('express');
const app = express();
const cors = require('cors')
const port = 3000;
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
const {User, Product } = require('./models');


// user section 
// user post ()
app.post('/user/userdetails', async function (req, res) {

  try {
    console.log(req.body);
    const body = req.body;
    const newUser = new User(body);
    const result = await newUser.save();
    res.json(result)
  } catch (error) {
    res.status(400).send('bad request');
  }
})
// user all get ()
app.get('/user/userdetails/all', async function (req, res) {
  try {
    const users = await User.find({}).lean();
    res.json(users)
  } catch (error) {
    console.log(error)
    res.status(400).send('bad request');
  }
})

// Admin section 
//creat product post ()

app.post('/product/productdetails', async function (req, res) {
  try {
    const body = req.body;
    const newproduct = new Product(body);
    const result = await newproduct.save();
    res.json(result)
  } catch (error) {
    console.log(error)
    res.status(400).send('bad request');
  }
})

// product all get ()
app.get('/product/productdetails/all', async function (req, res) {
  try {
    const productes = await Product.find({}).lean();
    res.json(productes)
  } catch (error) {
    console.log(error)
    res.status(400).send('bad request');
  }
})
// product product type get ()
app.get('/product/product/producttype', async function (req, res) {
  try {
    const producttype = req.body.producttype;
    const productes = await Product.find({ producttype }).lean();
    res.json(productes)
  } catch (error) {
    console.log(error)
    res.status(400).send('bad request');
  }
})














app.listen(port, console.log("app port is " + "" + port));

