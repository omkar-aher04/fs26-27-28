import axios from "axios";
import { useState, useEffect } from "react";
import Product from "./Product.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

function Main() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const result = await axios.get("https://fakestoreapi.in/api/products");
    console.log(result.data.products);
    setProducts(result.data.products);
  }

  return (
    <>
      <Header />
      <div className="products flex flex-wrap justify-around items-center gap-3 px-12">
        {products.length > 0 &&
          products.map((product) => {
            return <Product key={product.id} product={product} />;
          })}
      </div>
      <Footer />
    </>
  );
}

export default Main;
