const form = require('./form')

const displayFromResult = form.displayForm()

//Test presence input "Entrée une nouvelle tache"
if (displayFromResult.includes('id="task"')) {
    console.log("\n\x1b[32m" + "Test: presence de l'input 'Entrée une nouvelle tache' dans le formulaire => OK", '\x1b[0m')
}

//Test presence input "Date DeadLine"
if (displayFromResult.includesid = ('id="dateDeadLine"')) {
    console.log("\n\x1b[32m" + "Test: presence de l'input 'Date DeadLine' dans le formulaire => OK", '\x1b[0m')
}

//Test presence textArea "Description"
if (displayFromResult.includes('id="description"')) {
    console.log("\n\x1b[32m" + "Test: presence de l'input 'Description' dans le formulaire => OK", '\x1b[0m')
}