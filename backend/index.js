 const express = require("express")
 const app = express()
 const cors = require("cors")
 const pool = require("./db")
 const PORT = "5000"

 app.use(cors())
 app.use(express.json()); //req.body

 //ROUTES

 //create a todo
 app.post("/todos", (req, res) => {
   try {
      
   } catch (err) {
      console.error(err.message);
   }
 })

 //get all todos

 //update a todo

 //delete a todo


 app.listen(PORT, () => {
    console.log(`Server has started on port ${PORT}`)
 })
