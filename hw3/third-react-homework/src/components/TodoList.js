import React, { useState } from "react";
import { TextField, Button, List, IconButton, Card, CardContent, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function TodoList() {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);

    const addTask = () => {
        if (task.trim() !== "") {
            setTasks([...tasks, task]);
            setTask("");
        }
    };

    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    return (
        <div style={{ maxWidth: "400px", margin: "0 auto", marginTop: "50px" }}>
            <TextField
                label="Новая задача"
                variant="outlined"
                fullWidth
                value={task}
                onChange={(e) => setTask(e.target.value)}
                style={{ marginBottom: "10px" }}
            />

            <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={addTask}
                style={{ marginBottom: "20px" }}
            >
                Добавить задачу
            </Button>

            <List>
                {tasks.map((task, index) => (
                    <Card
                        key={index}
                        variant="outlined"
                        style={{ marginBottom: "10px" }}
                    >
                        <CardContent style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <Typography variant="body1" style={{ flexGrow: 1 }}>
                                {task}
                            </Typography>

                            <IconButton
                                edge="end"
                                color="secondary"
                                onClick={() => deleteTask(index)}
                            >
                                <DeleteIcon />
                            </IconButton>
                        </CardContent>
                    </Card>
                ))}
            </List>
        </div>
    );
}

export default TodoList;
