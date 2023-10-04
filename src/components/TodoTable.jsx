export default function TodoTable(props) {

    return(
        <div>
            <table>
            <tbody>
            <tr><th>Date</th><th>Description</th><th></th></tr>
            {
            props.todos.map((todo, index) =>
                <tr key="index">
                    <td>{todo.date}</td>
                    <td>{todo.description}</td>
                    <td><button onClick={() => props.delete(index)}>Delete</button></td>
                </tr>
                )
            }
            </tbody> 
            </table>
        </div>
    );
}
