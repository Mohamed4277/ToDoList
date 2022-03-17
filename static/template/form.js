// Display Form
function displayForm() {
    return `
    <form  action="/add-task" method="POST" enctype="application/x-www-form-urlencoded" >
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="task">Entrer une nouvelle tache</label>
                <input required type="text" class="form-control" id="task" name="task" placeholder="Entrer une nouvelle tache">
            </div>
            <div class="form-group col-md-6">
                <label for="dateDeadLine">Deadline</label>
                <input type="date" class="form-control" id="dateDeadLine" name="dateDeadLine"  value=${DateDay()} min=${DateDay()} max="2040-01-01">
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="description">Description</label>
                <textarea required class="form-control" id="description" name="description" placeholder="Description"></textarea>
            </div>
            <div class="form-group col-md-6">
                <button id="submit" type="submit" class="btn btn-primary mb-2">Sauvegarder</button>
            </div>
        </div>
    </form>`
}

// Day date
function DateDay() {
    let inputFormat = Date();
    function pad(s) { return (s < 10) ? '0' + s : s; }
    var d = new Date(inputFormat)
    return [d.getFullYear(), pad(d.getMonth() + 1), pad(d.getDate())].join('-')
}

module.exports = {
    displayForm
}