import { useNavigate } from "react-router"
import { addedToCart } from "./store/slices/cart";
import { useDispatch } from "react-redux";

export default function ProductCard({product}){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleNavigateToDetails = () => {
        navigate(`/product-details/${product.id}`)
    }
    return(
        <>
        <div className="col">
            <div className="card postition-relative">
            {   
                product.availabilityStatus === "In Stock" &&
                <div className="bg-success text-white rounded-2 position-absolute top-0 left-0 d-inline p-2">In Stock</div>
            }
            {   
                product.availabilityStatus === "Low Stock" &&
                <div className="bg-warning text-white rounded-2 position-absolute top-0 left-0 d-inline-block p-2">Low Stock</div>
            }
            {   
                product.availabilityStatus === "Out of Stock" &&
                <div className="bg-danger text-white rounded-2 position-absolute top-0 left-0 d-inline-block p-2">Out of Stock</div>
            }
                <img src={product.images} className="card-img-top" alt="..."/>
            <div className="card-body">
                <div className="card-title d-flex justify-content-between">
                    <h5 className="d-inline w-75 overflow-hidden" style={{height:"28px"}}>{product.title}</h5>
                    <h5 className="d-inline">${product.price}</h5>
                    </div>
                <p className="card-body overflow-hidden" style={{height:"62px"}}>
                    {product.description}
                </p>
                <div className=" d-flex justify-content-around">
                    <button className="btn btn-outline-primary rounded-5 me-3" onClick={handleNavigateToDetails}>View details</button>
                    <button className="btn btn-success rounded-5" onClick={() => dispatch(addedToCart({id: product.id,quantity: 1, title: product.title, price: product.price, image: product.images}))}>Add to Cart</button>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}