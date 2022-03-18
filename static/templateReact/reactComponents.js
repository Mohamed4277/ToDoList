        // Header component
        function DisplayHeader(props) {
            return (<div className="jumbotron jumbotron-fluid col-12">
                <h1 className="display-4">
                    To Do List
                    <img src={"./logo.svg"} className="react-logo" alt="logo"/>
                </h1>
            </div>)
        }

        // Table component
        function Table(props) {
            return (
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Tache</th>
                            <th scope="col">Description</th>
                            <th scope="col">Deadline</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.task.map(item =>

                            <tr>
                                <td className="info-task">
                                    {item.name}
                                </td>
                                <td className="info-task">
                                    {item.description === null ? '' : item.description}
                                </td>
                                <td className="info-task">
                                    {convertDate(item.date_dead_line)}
                                </td>
                                
                                    {item.status === 1 ? 
                                    <td className="info-task status-finished">Terminé</td> : 
                                    <td className="info-task status-ongoing">En cours</td>}
                                
                            </tr>)
                        }
                    </tbody>
                </table>)
        }

        // Page component
        function Page(props) {
            return (<div className="container">
                <DisplayHeader />
                <Table task={props.tasks} />
            </div>)
        }

        fetch("/to-do-list-react")
            .then(function (response) {
                return response.json()
            }).then(function (json) {
                const domContainer = document.getElementById('root');
                ReactDOM.render(<Page tasks={json} />, domContainer)
            })

        // Utils
        function convertDate(inputFormat) {
            if (inputFormat === null) return '';
            function pad(s) { return (s < 10) ? '0' + s : s; }
            var d = new Date(inputFormat)
            return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join('/')
        }
