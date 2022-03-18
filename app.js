var cors = require('cors');
const express = require('express')
const db = require('./src/dbUtils')
const pagehtmlToDoList = require('./static/templateSSR/pageToDoList')
const app = express()
const port = 3000

app.use(cors());

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})

app.use(express.static('static'));
app.use(express.urlencoded({ extended: true }))

// Display age & city
app.get('/get-data', (req, res) => {
   res.json({age:12, city:"Paris"})
})

// Display list to do
app.get('/', (req, res) => {
  db.dbGetTasks(
    function (error, results, fields) {
      let html = pagehtmlToDoList.displayToDoList(results)
      res.send(html)
    },
  )
})

//Json by react component
app.get('/to-do-list-react', (req, res) => {
  db.dbGetTasks(
    function (error, results, fields) {
      res.send(results)
    },
  )
})

// Add new task
app.post('/add-task', (req, res) => {
  let formData=[req.body['task'],req.body['description'],req.body['dateDeadLine']];
  db.dbAddTask(formData,
    function (error, results, fields) {
      res.redirect('/')
    })
})

// Delete task
app.post('/delete-task', (req, res) => {
  let formData=[req.body['id']];
  db.dbDeleteTask(formData,
    function (error, results, fields) {
      res.redirect('/')
    }
  )
})

// Update task
app.post('/update-task', (req, res) => {
  let formData=[req.body['id']];
  db.dbUpdateTask(formData,
    function (error, results, fields) {
      res.redirect('/')
    }
  )
})



