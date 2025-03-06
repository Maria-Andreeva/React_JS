import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { editProduct } from "../reducer/ProductSlice";

const EditProductForm = ({ productToEdit, setProductToEdit }) => {
    const dispatch = useDispatch();
    const [updatedProduct, setUpdatedProduct] = useState(productToEdit || {
        name: "",
        description: "",
        price: 0,
        available: true,
    });

    const [error, setError] = useState(""); // Для ошибки

    useEffect(() => {
        if (productToEdit) {
            setUpdatedProduct(productToEdit);
            setError(""); // Сбрасываем ошибку при выборе нового продукта
        }
    }, [productToEdit]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "price") {
            const priceValue = Number(value);
            if (priceValue < 0) {
                setError("Цена не может быть отрицательной!");
            } else {
                setError(""); // Очищаем ошибку, если цена корректная
            }
            setUpdatedProduct({ ...updatedProduct, [name]: priceValue });
        } else {
            setUpdatedProduct({ ...updatedProduct, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (updatedProduct.price < 0) {
            setError("Цена не может быть отрицательной!");
            return;
        }

        dispatch(editProduct(updatedProduct));
        setProductToEdit(null);
    };

    return productToEdit ? (
        <form onSubmit={handleSubmit}>
            <h3>Редактировать продукт</h3>
            <input
                type="text"
                name="name"
                value={updatedProduct.name}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="description"
                value={updatedProduct.description}
                onChange={handleChange}
                required
            />
            <input
                type="number"
                name="price"
                value={updatedProduct.price}
                onChange={handleChange}
                min="0"
                style={{ border: error ? "2px solid red" : "1px solid #ccc" }} // Подсветка ошибки
                required
            />
            {error && <p style={{ color: "red" }}>{error}</p>} {/* Вывод ошибки */}

            <label>
                <input
                    type="checkbox"
                    name="available"
                    checked={updatedProduct.available}
                    onChange={() =>
                        setUpdatedProduct({ ...updatedProduct, available: !updatedProduct.available })
                    }
                />
                В наличии
            </label>
            <button type="submit">Сохранить</button>
            <button type="button" onClick={() => setProductToEdit(null)}>Отмена</button>
        </form>
    ) : null;
};

export default EditProductForm;
