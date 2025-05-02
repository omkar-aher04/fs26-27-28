import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../productSlice";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  const dispatch = useDispatch();
  const initState = useSelector((state) => {
    return state.ecommerce;
  });

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if (initState.loading) return <h1>LOADING...</h1>;

  return (
    <>
      <div
        id="products"
        className="flex justify-evenly flex-wrap gap-3 items-center px-12 py-6"
      >
        {initState.products.map((obj) => {
          return (
            <div className="product w-[23%]" key={obj.id}>
              <Link to={`/product/${obj.id}`}>
                <img src={obj.image} />
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Home;
