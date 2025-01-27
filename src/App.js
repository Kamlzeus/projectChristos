import { useEffect, useState } from "react";
import { ProductCard } from "./components/ProductCard";
import { Filters } from "./components/Filters";
import "./index.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = [
    "All",
    "Men's Clothing",
    "Women's Clothing",
    "Electronics",
    "Jewelery",
  ];

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
        setFilteredProducts(json);
      })
      .finally(() => setLoading(false));
  }, []);

  const handleFilter = (category) => {
    setActiveCategory(category);

    if (category === "All") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.category.toLowerCase() === category.toLowerCase()
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <div className="app">
      {loading && <div className="spinner">Падажжи...</div>}
      <Filters
        categories={categories}
        onFilter={handleFilter}
        activeCategory={activeCategory}
      />
      <div className="product-list">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
}

export default App;
