import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import instance from "../axiosConfig";

function Singleproduct() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    getSingleProductData(id);
  }, [id]);

  async function getSingleProductData(id) {
    const response = await instance.get(`/products/${id}`);
    console.log(response.data.product);
    setProduct(response.data.product);
  }

  return <></>;
}

export default Singleproduct;
