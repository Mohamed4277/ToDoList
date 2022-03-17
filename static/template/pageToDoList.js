const header=require('./header')
const form=require('./form')
const table=require('./table')

// Dispaly list to do
function displayToDoList(lists) {
    return `
    <html>
        <head>
            <!-- Latest compiled and minified CSS -->
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
                integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
            <link href="style.css" rel="stylesheet">
        </head>
        <body>
            <div class="container">
                <div class="row" id="header">
                    ${header.displayHeader()}
                </div>
                <div class="row" id="input-task">
                    ${form.displayForm()}
                </div>
                <div class="row" id="list">
                    ${table.displayList(lists)}
                </div>
            </div>
        </body>

    </html>`
}


module.exports = {
    displayToDoList
}