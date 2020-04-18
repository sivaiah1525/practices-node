const mongosse = require('mongoose');
const DBURL = 'mongodb://localhost:27017/DataBase';


async function connectdb() {
    try {
        await mongosse.connect(DBURL);
        console.log("connect DB succefully");
    } catch (error) {
        console.log('connaction DB  failed');
        // process.exit()
    }
}
connectdb();
const db = mongosse.connection;


module.exports = db;