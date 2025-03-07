import React from "react";
import ProductList from "./components/ProductList";


function App() {
    return (
        <div>
            <h1>  Products HUB  </h1>
            <ProductList />
            <AddProductForm />
            <EditProductForm />
        </div>
    );
}

export default App;
