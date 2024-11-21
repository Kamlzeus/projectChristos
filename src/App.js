import { useEffect, useState } from "react";
import { ProductCard } from "./components/ProductCard";
import "./index.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="app">
      {loading && <div>Загрузка...</div>}
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
}

export default App;
