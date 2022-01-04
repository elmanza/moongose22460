require("dotenv").config();
const mongoose = require("mongoose");
const MONGO_URI = `${process.env.MONGO_DB_URI}${process.env.DB_NAME}`;

let connection;
(async ()=>{
    try {
        connection = mongoose.connect(MONGO_URI, {useNewUrlParser:true,useUnifiedTopology: true });
        console.log("Conexión establecida!");
    } catch (error) {
        console.log(error);
    }
})();

module.exports = {connection, mongoose}