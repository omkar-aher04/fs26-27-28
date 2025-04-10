import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

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
  function trimContent(input, length) {
    return input.length > length
      ? input
          .split(" ")
          .slice(0, length + 1)
          .join(" ") + "..."
      : input;
  }

  return (
    <div className="products flex flex-wrap justify-around items-center gap-3 px-12">
      {products.length > 0 &&
        products.map((product) => {
          return (
            <div key={product.id} className="product w-[23%] h-96 p-2">
              <img
                className="w-full h-1/2"
                src={product.image}
                alt={product.title}
              />
              <h3>{trimContent(product.title, 8)}</h3>
              <p className="font-bold">${product.price}</p>
              <div className="flex justify-between items-center">
                <button className="px-2 py-1 border-2 border-pink-400 bg-pink-400 rounded-lg">
                  Add To Wishlist
                </button>
                <button className="px-2 py-1 border-2 border-green-400 bg-green-400 rounded-lg">
                  Add To Cart
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Main;
