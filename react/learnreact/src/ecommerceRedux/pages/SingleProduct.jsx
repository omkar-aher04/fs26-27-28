import { useEffect } from "react";
import { fetchSingleProduct } from "../productSlice";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

function SingleProduct() {
  const dispatch = useDispatch();
  const initState = useSelector((state) => {
    return state.ecommerce;
  });

  const { id } = useParams();

  useEffect(() => {
    if (id) dispatch(fetchSingleProduct(id));
  }, [id]);

  if (initState.loading) return <h1>LOADING...</h1>;

  return (
    <div className="px-12 py-6 flex gap-6">
      <div className="left w-[20%]">
        <img
          className="w-full"
          src={initState.singleProduct.image}
          alt={initState.singleProduct.title}
        />
      </div>
      <div className="right w-[80%]">
        <h2>{initState.singleProduct.title}</h2>
      </div>
    </div>
  );
}

export default SingleProduct;
