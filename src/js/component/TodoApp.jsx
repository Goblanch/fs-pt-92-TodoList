import React, { useState } from "react";

const TodoApp = () => {
    const [tasks, setTasks] = useState([]);
    const [taskCount, setTaskCount] = useState(0);
    const [inputValue, setInputValue] = useState("");

    const addTask = () => {
        if (inputValue.trim()) {
            setTasks([...tasks, inputValue]);
            setInputValue("");
            setTaskCount(tasks.length + 1)
        }
    }

    const deleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
        setTaskCount(tasks.length - 1)
    }

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            addTask();
        }
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center fw-light mb-4 app-title">todos</h1>
            <div className="row justify-content-center">
                <div className="col-md-6 border mb">
                    <div className="input-group m-2">
                        <input
                            type="text"
                            className="form-control me-3"
                            placeholder="What needs to be done?"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyDown={handleKeyDown}
                        />
                        {/* <button className="btn btn-primary" onClick={addTask}>
                            Add
                        </button> */}
                    </div>
                    <ul className="list-group">
                        {tasks.map((task, index) => (
                            <li
                                key={index}
                                className="list-group-item d-flex justify-content-between align-items-center border m-2 task-item"
                            >
                                {task}
                                <button
                                    className="btn btn-sm delete-button"
                                    onClick={() => deleteTask(index)}
                                >
                                    <i className="fa-solid fa-x" style={{ color: "grey" }}></i>
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div className="border-top">
                        <p className="text text-muted fw-light m-2">{taskCount} items left</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodoApp;