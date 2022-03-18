// Display a table of list to do
function displayList(lists) {
    let result = ""
    for (let list of lists) {
        displayRowTable(list)
        result = result + displayRowTable(list)
    }

    return `<table id="table" class="table">
                <thead>
                    <tr>
                        <th scope="col">Tache</th>
                        <th scope="col">Description</th>
                        <th scope="col">Deadline</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                   ${result}
                </tbody>
            </table>`;
}

// Display a task
function displayRowTable(list) {
    return `
    <tr>
            <td col=row class="info-task">
                ${list.name}
            </td>
            <td col=row class="info-task">
                ${list.description === null ? '' : list.description}
            </td>
            <td col=row class="info-task">
                ${convertDate(list.date_dead_line)}
            </td>
            <td col=row style=${styleStatus(list.status)}>
                ${list.status === 1 ? "Terminé" : "En cours"}
            </td>
            <td>
                <form class="form-inline">
                    <button type="submit" class="btn btn-primary btn-danger" formaction="/delete-task" formmethod="POST" formenctype="application/x-www-form-urlencoded">Supprimer</button> 
                    <button type="submit" class="btn btn-primary btn-success" formaction="/update-task" formmethod="POST" formenctype="application/x-www-form-urlencoded">Terminer</button>
                    <input readonly type="text" class="form-control col-6" id="id" name="id" value="${list.id}" hidden>
                </form>
            </td>
    </tr>`
}

// Utils
function convertDate(inputFormat) {
    if (inputFormat === null) return '';
    function pad(s) { return (s < 10) ? '0' + s : s; }
    var d = new Date(inputFormat)
    return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join('/')
}

function styleStatus(status) {

    return status === 1 ? `"color:#36d436; font-weight:bold; text-align:center"` : `"color:orange; font-weight:bold; text-align:center"`
}

module.exports = {
    displayList,
    convertDate,
}