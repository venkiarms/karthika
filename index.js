const express = require('express')
const app = express();

//JZbvKEmw70XIZOgA
const mongoose = require('mongoose')

const router = require("./routes/vegetable_routes")
app.use(express.json());
app.use("/vegetables",router);



// app.get('/',(req,res)=>{
//     res.send("Hello")
// })

// app.get('/ads',(req,res)=>{
//     res.send("Hello ads")
// })

mongoose
.connect('mongodb+srv://vegetable:JZbvKEmw70XIZOgA@cluster0.keazd0q.mongodb.net/vegetable?retryWrites=true&w=majority')
then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(6400);
  })
  .catch((err) => console.log(err));
