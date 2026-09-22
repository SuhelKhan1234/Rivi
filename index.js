const express = require("express");
const app = express();
 
const port = 3000;

//Adding middleware
app.use(express.json());


app.listen(port, ()=>{
    console.log("App is Running")
})