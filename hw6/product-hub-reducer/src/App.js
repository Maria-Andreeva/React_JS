import './App.css';
import AddProductForm from "./components/AddProductForm";
import EditProductForm from "./components/EditProductForm";
import ProductList from "./components/ProductList";

function App() {
  return (
      <div>
        <h1>  Products Hub  </h1>
        <ProductList />
        <AddProductForm />
        <EditProductForm />
      </div>
  );
}

export default App;