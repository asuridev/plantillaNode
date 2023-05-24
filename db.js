const mongoose = require('mongoose');
const URL_DB = "mongodb+srv://asuridev:206145@cluster0.xrcjjam.mongodb.net/parcial?retryWrites=true&w=majority"

const connectDb = async ()=>{
    try {
        await mongoose.connect(URL_DB);
        console.log('conexion exitosa a la base de datos')
    } catch (error) {
        console.log(error)
    }  
}

module.exports = {
    connectDb
}