require("dotenv").config();
const mongoose = require("mongoose");
const MONGO_URI = `${process.env.MONGO_DB_URI}${process.env.DB_NAME}`;
const MONGO_ATLAS_URI = `${process.env.MONGO_ATLAS}`;

let connection;
(async ()=>{
    try {
        connection = mongoose.connect(MONGO_ATLAS_URI, {useNewUrlParser:true,useUnifiedTopology: true });
        console.log("--------------------------------------------------------------------");
        console.log("Conexión establecida!");
    } catch (error) {
        console.log(error);
    }
})();

module.exports = {connection, mongoose}


// [
//     { nombre: "Lucas", apellido: "Blanco", dni: "192612323"},
//     { nombre: "María", apellido: "García", dni: "23523423"},
//     { nombre: "Tomas", apellido: "Sierra", dni: "68567576"},
//     { nombre: "Carlos", apellido: "Fernández", dni: "9986756745"}
// ]