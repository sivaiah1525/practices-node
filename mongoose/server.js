const db=require('./DB');
const user=require('./user')

const userdetails = new user({
    name:'siva',
    age:22
})


userdetails.save();