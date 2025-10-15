 const express = require("express")
 const app = express()
 const cors = require("cors")
 const pool = require("./db")
 const PORT = "5000"

 app.use(cors())
 app.use(express.json()); //req.body

 //ROUTES

 //create a todo
 app.post("/todos", async (req, res) => {
   try {
      const { description } = req.body;
      const newTodo = await pool.query(
         "INSERT INTO todo (description) VALUES($1) RETURNING *",
         [description]
      );
      res.json(newTodo.rows[0])
   } catch (err) {
      console.error(err.message);
   }
 })

 //get all todos

 app.get("/todos", async(req, res) => {
   try {
      const allTodos = await pool.query("SELECT * FROM todo")
      res.json(allTodos.rows)
   } catch (err) {
      console.error(err.message)
   }
 })

 //get a todo
app.get("/todos/:id", async(req, res) => {
   try {
      const { id } = req.params;
      const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id])

      res.json(todo.rows)
   } catch (err) {
      console.error(err.message)
   }
})


 //update a todo

app.put("./todos/:id", async(req, res) => {
   try {
      const id = Number(req.params.id)
      const { description } = req.body

      if (!Number.isInteger(id)) return res.status(400).json({error: "Invalid id"});
      if (typeof description !== "string" || !description.trim()) {
         return res.status(400).json({error: "Description is required"})
      } 

      const result = await pool.query(
         "UPDATE todo SET description = $1 WHERE todo_id = $2 RETURNING *",
         [description.trim(), id]
      )

      const updated = result.rows[0]
      if(!updated) return res.status(400).json({error: "Todo not found"})

      res.json(updated)

   } catch (error) {
      
   }
})

 //delete a todo


 app.listen(PORT, () => {
    console.log(`Server has started on port ${PORT}`)
 })
