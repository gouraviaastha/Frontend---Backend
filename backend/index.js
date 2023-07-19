const express = require('express')
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://admin:g100ourav@hello.6mwpb00.mongodb.net/?retryWrites=true&w=majority').then(()=> console.log("connection successfull")).catch((err)=>console.log(err))
const router = require('./router/router')
const app = express();
const cors = require('cors')
app.use(cors());
const addition = require('./controller/add')
app.use(express.json())
app.use( '/',router)
// app.get("/", addition.getData )
// app.delete("/delete", addition.deletedata)

// app.post("/add", addition.createData)
// app.put("/update", addition.updateOne)
// app.get("/get/:_id", addition.getOne)


app.listen(4000, ()=>{
    console.log("your request is listen on port" + 4000)
}) 

