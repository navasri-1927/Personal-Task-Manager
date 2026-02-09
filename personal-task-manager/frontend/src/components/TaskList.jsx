import axios from "axios";
import { useEffect, useState } from "react";

function TaskList() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/tasks")
            .then(res => setTasks(res.data));
    }, []);

    const deleteTask = async (id) => {
        await axios.delete(`http://localhost:5000/api/tasks/${id}`);
        setTasks(tasks.filter(task => task._id !== id));
    };

    return (
        <ul>
            {tasks.map(task => (
                <li key={task._id}>
                    {task.title}
                    <button onClick={() => deleteTask(task._id)}>❌</button>
                </li>
            ))}
        </ul>
    );
}

export default TaskList;
