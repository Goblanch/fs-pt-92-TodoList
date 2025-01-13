import React from "react";

const Task = (props) => {
    return (
        <div
            className="container-fluid p-0 d-flex justify-content-between align-items-center task-item"
        >
            {props.task}
            <button
                className="btn btn-sm delete-button"
                onClick={props.deleteTask}
            >
                <i className="fa-solid fa-x" style={{ color: "grey" }}></i>
            </button>
        </div>
    )
}

export default Task;