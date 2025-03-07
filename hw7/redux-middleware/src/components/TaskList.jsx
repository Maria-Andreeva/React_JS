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
        <div>
            <h1>Task List</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {Array.isArray(items) && items.length > 0 ? (
                        items.map((task) => (
                            <li key={task.id}>
                                {task.title} - {task.completed ? "Done" : "Pending"}
                            </li>
                        ))
                    ) : (
                        <p>No tasks available.</p> // Если задач нет или они не загружены
                    )}
                </ul>
            )}
        </div>
    );
};
