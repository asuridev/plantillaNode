const express = require('express');
const {connectDb} = require('./db');
const {Variable} = require('./models/variables.model')
const app = express();
const port = 3000;
connectDb();

app.get('/api/variables/:tem/:hum',(req,res)=>{
    const {tem,hum} = req.params;
    const newData = new Variable({
        temperatura:Number(tem),
        humedad:Number(hum)
    });
    newData.save();
    console.log(tem,"/",hum);
    res.json(newData);
})


app.listen(port,()=>{
    console.log('escuchando el perto: ',port);
});



