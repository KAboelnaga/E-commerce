import axios from "axios";
import { useParams, useNavigate } from "react-router"
import {    useEffect, useState } from "react";
import { Tooltip, OverlayTrigger, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addedToCart} from "../compenents/store/slices/cart";

export default function ProductDetails(){
    const params = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [product, setProduct] = useState([]);
    const [quantity, setQuantity] = useState(1);
    console.log(params);
    
    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${params.id}`)
        .then((response) => {
            setProduct(response.data);
        })
        .catch((error) => console.log(error));
    }, [params.id]);
    console.log(product);
    const tooltip1 = (
        <Tooltip id="tooltip">
            <strong>{product.category}</strong>
        </Tooltip>
    );
    const tooltip2 = (
        <Tooltip id="tooltip">
            <strong>{product.brand}</strong>
        </Tooltip>
    );
    const handleQuantityChange = (action) => {
        if (action === 'remove'){
            if (quantity === 1){
                alert("can't buy less than 1 item!");
            }
            else{
                setQuantity(quantity-1);
            }
        }
        else if(action === 'add'){
            if(quantity === product.stock){
                alert(`Only ${product.stock} items left in stock, can't buy more!`);
            }
            else{
                setQuantity(quantity+1);
            }
        }
    }
    const rating = product.rating || 0;
    const fullStars = Math.floor(rating);
    const halfStars = rating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (halfStars ? 1 : 0);

    return(
        <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-lg-6">
                    <img src={product.images} className="img-fluid" alt="product image" />
                </div>
                <div className="col-12 col-lg-6">
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>

                    {[...Array(fullStars)].map((_, i) => <i key={`full-${i}`} className="bi bi-star-fill text-success"></i>)}
                    {halfStars && <i className="bi bi-star-half text-success"></i>}
                    {[...Array(emptyStars)].map((_, i) => <i key={`empty-${i}`} className="bi bi-star text-success"></i>)}
                    {product.discountPercentage > 0 && <h2 className="fst-italic  me-5 text-muted"><del>${(product.price / (1-(product.discountPercentage / 100))).toFixed(2)}</del></h2>}
                    <h2>${product.price} or {(product.price / 6).toFixed(2)}/month</h2>
                    <p>suggested payments with 6 months special financing</p>
                    {   
                        product.availabilityStatus === "In Stock" &&
                        <div className="bg-success text-white rounded-2 w-auto d-inline-block p-2">In Stock</div>
                    }
                    {   
                        product.availabilityStatus === "Low Stock" &&
                        <div className="bg-warning text-white rounded-2 w-auto d-inline-block p-2">Low Stock</div>
                    }
                    {   
                        product.availabilityStatus === "Out of Stock" &&
                        <div className="bg-danger text-white rounded-2 w-auto d-inline-block p-2">Out of Stock</div>
                    }
                    <br />
                    <div className="mt-3"></div>
                    <OverlayTrigger placement="bottom" overlay={tooltip1}>        
                         <Button className="bg-light border-0 text-black me-3">Category</Button>
                    </OverlayTrigger>
                    <OverlayTrigger placement="bottom" overlay={tooltip2}>        
                         <Button className="bg-light border-0 text-black">Brand</Button>
                    </OverlayTrigger>
                    <br />
                    <div className="d-inline-block my-3">
                        <button className="bg-light text-black rounded-3 border-0" onClick={() => handleQuantityChange('remove')}><i className="bi bi-dash-lg"></i></button>
                        <span className="bg-light text-black">{quantity}</span>
                        <button className="bg-light text-black rounded-3 border-0" onClick={() => handleQuantityChange('add')}><i className="bi bi-plus"></i></button>
                        {
                            product.stock <= 20 && product.stock > 0 && <div className="d-inline">Only <span className="text-warning">{product.stock} Items</span> left. Hurry up</div>
                        }
                    </div>
                    <br />
                    <button className={`btn btn-success me-5 ${product.availabilityStatus === 'Out of Stock' ? 'disabled' : ''}`} onClick={() => {dispatch(addedToCart({id: product.id, quantity: quantity, title: product.title, price: product.price, image: product.images})); navigate('/cart')}}>Buy Now</button>
                    <button className={`btn btn-outline-success${product.availabilityStatus === 'Out of Stock' ? 'disabled' : ''}`} onClick= {() => dispatch(addedToCart({id: product.id, quantity: quantity, title: product.title, price: product.price, image: product.images}))}>Add to Cart</button>
                </div>
            </div>
        </div>
        </>
    )
}