
const mongoose = require('mongoose')
const DB_URI = 'mongodb://localhost:27017/test';

async function connectToDB() {
     try {
          await mongoose.connect(DB_URI, {
               useNewUrlParser: true,useUnifiedTopology: true 
          });
          console.log('Succefully Connected To DB');
     } catch (error) {
          console.error('Database Connection Failed');
     }
}

connectToDB()

const db = mongoose.connection
module.exports = db;