const mysql = require('mysql');

// Connect to MySQL
function connectToMySQL() {
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'todolist'
  });
  connection.connect();
  return connection
}

// Get list to do
function dbGetTasks(callBackGet) {
  let connection = connectToMySQL()
  let query = "SELECT * FROM todolist ORDER BY id desc"
  connection.query(query, callBackGet);
  connection.end
}

// Insert a task
function dbAddTask(task, afterTreatment) {
  let connection = connectToMySQL()
    let query = `INSERT INTO todolist(name,description,date_dead_line,status) VALUES(?,?,?,0)`
    connection.query(query, task, (error) => {
      if (error) {
        console.log(error)
      }
      connection.commit()
      connection.end
      afterTreatment()
    })
  connection.end
}

// Delete a task
function dbDeleteTask(task, afterTreatment) {
  let connection = connectToMySQL()
  let query = `DELETE FROM todolist WHERE id =?`
  connection.query(query, task,
    (error) => {
      if (error) {
        console.log(error)
      }
      connection.commit()
      connection.end
      afterTreatment()
    }
  );
}

// Update a task
function dbUpdateTask(task, afterTreatment) {
  let connection = connectToMySQL()
  let query = `UPDATE todolist SET status = 1 WHERE id =?`
  connection.query(query, task, (error) => {
    if (error) {
      console.log(error)
    }
    connection.commit()
    connection.end
    afterTreatment()
  });
  connection.end
}

module.exports = {
  dbGetTasks,
  dbAddTask,
  dbDeleteTask,
  dbUpdateTask
}