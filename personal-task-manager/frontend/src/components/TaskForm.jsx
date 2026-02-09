import axios from "axios";
import { useState } from "react";

function TaskForm() {
    const [title, setTitle] = useState("");

    const addTask = async () => {
        if (!title) return;
        await axios.post("http://localhost:5000/api/tasks", { title });
        setTitle("");
        window.location.reload();
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Enter task"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button onClick={addTask}>Add</button>
        </div>
    );
}

export default TaskForm;
