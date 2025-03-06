import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../reducer/ProductSlice";
import EditProductForm from "./EditProductForm";

export default function ProductList() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.productList.productsItems);
    const [productToEdit, setProductToEdit] = useState(null);

    return (
        <div>
            <h2>Список продуктов</h2>
            {products.length === 0 && <p className="no-products">Продукты отсутствуют</p>}
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <strong>{product.name}</strong> - {product.description} - {product.price}₽
                        <span> {product.available ? "📦 В наличии" : "🚫 Нет в наличии"}</span>
                        <button onClick={() => setProductToEdit(product)}>✏️ Редактировать</button>
                        {/* Передаем только id для удаления */}
                        <button onClick={() => dispatch(deleteProduct(product.id))}>🗑️ Удалить</button>
                    </li>
                ))}
            </ul>
            <EditProductForm productToEdit={productToEdit} setProductToEdit={setProductToEdit} />
        </div>
    );
}
