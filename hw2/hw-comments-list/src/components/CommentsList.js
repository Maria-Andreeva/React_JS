import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

function CommentsList() {
    const [comments, setComments] = useState([
        { id: 1, text: "Это первый комментарий" },
        { id: 2, text: "Это второй комментарий" },
        { id: 3, text: "Это третий комментарий" }
    ]);
    const [newComment, setNewComment] = useState(""); // Отдельное состояние для ввода

    const handleInputChange = (event) => {
        setNewComment(event.target.value);
    };

    const addComment = () => {
        if (newComment.trim() !== "") { // Проверка на пустой ввод
            const newCommentObj = {
                id: comments.length + 1,
                text: newComment
            };
            setComments([...comments, newCommentObj]); // Добавляем в список
            setNewComment(""); // Очищаем инпут
        }
    };

    const deleteComment = (id) => {
        setComments(comments.filter(comment => comment.id !== id)); // Удаление по ID
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
            <h2>Список комментариев</h2>
            <input
                type="text"
                value={newComment} // Исправлено на newComment
                onChange={handleInputChange}
                maxLength={50}
                style={{ marginBottom: "10px", padding: "5px" }}
            />
            <button onClick={addComment} style={{ marginBottom: "20px", padding: "5px 10px" }}>Добавить</button>
            <p>{newComment ? `Вы ввели: ${newComment}` : 'Пока Вы ничего не ввели'}</p>

            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
                <ul style={{ listStyle: "none", padding: 0 }}>
                    {comments.map((comment) => (
                        <li key={comment.id} style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "5px" }}>
                            {comment.text}
                            <button onClick={() => deleteComment(comment.id)} style={{ cursor: "pointer", border: "none", background: "transparent", fontSize: "16px" }}>
                                <DeleteIcon style={{ color: "red" }} />
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default CommentsList;
