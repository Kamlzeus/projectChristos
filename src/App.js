import { ProductCard } from "./components/ProductCard";

const products = [
  {
    id: 0,
    name: "Iphone 15 pink",
    category: "Pink",
    price: 729,
    img: "https://www.imagineonline.store/cdn/shop/files/iPhone_15_Pink_PDP_Image_Position-1__en-IN.jpg?v=1694605258&width=1445",
  },

  {
    id: 0,
    name: "Iphone 15 Pro",
    category: "Black Titanium",
    price: 1110,
    img: "https://istyle.si/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/i/p/iphone_15_pro_black_titanium_pdp_image_position-1__en-us_1_1.jpg",
  },
];

function App() {
  return (
    <div>
      {products.map((product) => (
        <ProductCard data={product} />
      ))}
    </div>
  );
}

export default App;
