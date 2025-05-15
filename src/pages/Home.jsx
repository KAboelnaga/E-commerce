import { useEffect, useState } from "react"
import ProductCard from "../compenents/ProductCard"
import axios from "axios";

export default function Home(){
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalProducts, setTotalProducts] = useState(0);
    const skip = (page - 1) * 30;
    useEffect(() => {
        axios.get(`https://dummyjson.com/products?limit=30&skip=${skip}`)
        .then((response) => {setProducts(response.data.products); setTotalProducts(response.data.total);})
        .catch((error) =>console.log(error));
    },[page]);
    console.log(products[0]);
    const totalPages = Math.ceil(totalProducts / 30);
    return(
        <>
            <h4 className="text-center mb-5">Welcome to our shopping website, start browsing......</h4>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    products.map((product) => (
                        <div className="col" key={product.id}>
                            <ProductCard product={product}/>
                        </div>
                    ))
                }
            </div>
            <div className="d-flex justify-content-center mt-4">
        <button
          className="btn btn-secondary me-2"
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          Prev
        </button>

        <span className="align-self-center">Page {page} of {totalPages}</span>

        <button
          className="btn btn-secondary ms-2"
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
        </>
    )
}