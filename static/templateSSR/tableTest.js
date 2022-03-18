
const table = require('./table')

const displayListResult = table.displayList([{ name: "Tache 1", description: "Description 1", date_dead_line: Date.now(), status: 0 },
{ name: "Tache 2", description: "Description 2", date_dead_line: Date.now(), status: 1 }])

// Test infos tache 1 sont affichées

if (displayListResult.replace(/\s+/g,"").search(`<td col=row class="info-task">Tache 1</td>
                                <td col=row class="info-task">Description 1</td>
                                <td col=row class="info-task"> ${table.convertDate(Date.now())}</td>
                                <td col=row style="color:orange; font-weight:bold; text-align:center">En cours</td>`.replace(/\s+/g,"")) >=0) {


    console.log("\n\x1b[32m" + "Test: presence de la tache 1 dans le tableau => OK", '\x1b[0m')

}


// Test infos tache 2 sont affichées

if (displayListResult.replace(/\s+/g,"").search(`<td col=row class="info-task">Tache 2</td>
                                <td col=row class="info-task">Description 2</td>
                                <td col=row class="info-task"> ${table.convertDate(Date.now())}</td>
                                <td col=row style="color:#36d436; font-weight:bold; text-align:center">Terminé</td>`.replace(/\s+/g,"")) >=0) {

    console.log("\n\x1b[32m" + "Test: presence de la tache 2 dans le tableau => OK", '\x1b[0m')

}

