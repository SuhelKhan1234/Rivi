const express = require("express");
const app = express();
 
const port = 3000;

//Adding middleware
app.use(express.json());


// get Request
app.get("/", (req, res)=>{
    res.send(`<h1>This is heading<h1>`)
})


app.post ("/car", (req,res)=>{
    res.send("Received a post Request");
})

app.listen(port, ()=>{
    console.log("App is Running.")
})