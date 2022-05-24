import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import ProductDetail from "../components/ProductDetail";

const Purchease = () => {
  const { id } = useParams();
  const { data, isLoading } = useQuery(["specificProduct", id], () =>
    fetch(`http://localhost:5000/products/${id}`).then((res) => res.json())
  );
  console.log(data);
  return <>
            {isLoading ? 
                <Loading /> : 
                    <div>
                        <ProductDetail product={data}/>
                        
                    </div>
                }
        </>;
};

export default Purchease;
