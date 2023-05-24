const mongoose = require('mongoose');
const { Schema } = mongoose;

const variableSchema =  new Schema({
    temperatura:Number,
    humedad:Number
});

const Variable = mongoose.model('Variable',variableSchema);
module.exports = {
    Variable
}