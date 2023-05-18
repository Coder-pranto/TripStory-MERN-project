const mongoose = require("mongoose");
const uri = 'mongodb://localhost:27017/tripstorydb';

const connectDB = async() =>{
    try {
        await mongoose.connect(uri, {useNewUrlParser : true, useUnifiedTopology : true})
        console.log(">Database connected...".bgCyan);
    } catch (error) {
        console.log(`> Error while connecting to mongoDB : ${error.message}`.underline.red );
        process.exit(1);
    }
}

module.exports = connectDB;