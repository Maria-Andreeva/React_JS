import {useDispatch, useSelector} from "react-redux";
import {fetchTasks} from "../reducers/tasksSlice";
import {useEffect} from "react";

export default function TaskList () {
    const dispatch = useDispatch();
    const { items, loading } = useSelector((state) => state.tasks);

    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);

    return (
        <div className="task-list-container">
            <h1>Task List</h1>
            {loading ? (
                <p className="loading-text">Loading...</p>
            ) : (
                <ul className="task-list">
                    {Array.isArray(items) && items.length > 0 ? (
                        items.map((task) => (
                            <li key={task.id} className={`task-item ${task.completed ? "completed" : ""}`}>
                                {task.title} - {task.completed ? "✔ Done" : "⏳ Pending"}
                            </li>
                        ))
                    ) : (
                        <p className="no-tasks-text">No tasks available.</p>
                    )}
                </ul>
            )}
        </div>
    );
};
