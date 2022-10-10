const express=require('express');
const app=express();
const cors=require('cors');

require('dotenv').config({path:"./config.env"})
const port=process.env.PORT||5000;

//middlewire
app.use(cors());
app.use(express.json());

//mongoDB connection
const con = require('./db/connection')

//routes
app.use(require('./routes/route'));

con.then(db=>{
    if(!db) return process.exit();
    app.listen(port,()=>{
        console.log(`server running on port http://localhost:${port}`);
    })

    app.on('error', err=>{
        console.log(`Failed to connect Database:${err}`);
    })
}).catch(error=>{
    console.log(`Connection Failed...! ${err}`);
})

