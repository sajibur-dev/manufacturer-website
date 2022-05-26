import { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import ProductDetail from "../components/ProductDetail";
import PurcheaseModal from "../components/PurcheaseModal";

const Purchease = () => {
  const [date,setDate] = useState(new Date());
  const [product,setProduct] = useState(null);
  const { id } = useParams();
  const { data, isLoading } = useQuery(["specificProduct", id], () =>
    fetch(`https://frozen-coast-70492.herokuapp.com/products/${id}`).then((res) => res.json())
  );
  console.log(data);
  return <>
            {isLoading ? 
                <Loading /> : 
                    <div>
                        <ProductDetail date={date} setDate={setDate} product={data} setProduct={setProduct}/>
                        {
                          product && <PurcheaseModal date={date} product={product} setProduct={setProduct}/>
                        }
                    </div>
                }
        </>;
};

export default Purchease;
