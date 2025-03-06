import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../reducer/ProductSlice";

const AddProductForm = () => {
    const dispatch = useDispatch();
    const [newProduct, setNewProduct] = useState({
        name: "",
        description: "",
        price: 0,
        available: true,
    });

    const [error, setError] = useState(""); // Для отображения ошибки

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "price") {
            const priceValue = Number(value);
            if (priceValue < 0) {
                setError("Цена не может быть отрицательной!");
            } else {
                setError(""); // Очищаем ошибку, если цена корректная
            }
            setNewProduct({ ...newProduct, [name]: priceValue });
        } else {
            setNewProduct({ ...newProduct, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (newProduct.price < 0) {
            setError("Цена не может быть отрицательной!");
            return;
        }

        // Генерируем уникальный id для нового продукта
        const newProductWithId = { ...newProduct, id: Date.now() };

        dispatch(addProduct(newProductWithId));
        setNewProduct({
            id: "",
            name: "",
            description: "",
            price: 0,
            available: true,
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Добавить продукт</h3>
            <input
                type="text"
                name="name"
                value={newProduct.name}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="description"
                value={newProduct.description}
                onChange={handleChange}
                required
            />
            <input
                type="number"
                name="price"
                value={newProduct.price}
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
                    checked={newProduct.available}
                    onChange={() =>
                        setNewProduct({ ...newProduct, available: !newProduct.available })
                    }
                />
                В наличии
            </label>
            <button type="submit">Добавить</button>
        </form>
    );
};

export default AddProductForm;
