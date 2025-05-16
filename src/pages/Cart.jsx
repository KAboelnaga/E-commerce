import { useDispatch, useSelector } from 'react-redux';
import { addedToCart, deletedFromCart, removedFromCart } from '../compenents/store/slices/cart';

export default function Cart(){
    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();
    const total = Object.values(cartItems).reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
    );
    return(
        <>
            <h2>Cart</h2>
            {
                Object.keys(cartItems).length > 0 ? (
                <div className="container-fluid">
                <div className="row my-5 d-lg-flex d-none">
                    <div className="col-12 col-lg-6 d-flex justify-content-center">
                        <h6>Description</h6>
                    </div>
                    <div className="col-12 col-lg-2 d-flex justify-content-center">
                        <h6>Quantity</h6>
                    </div>
                    <div className="col-lg-2 d-flex justify-content-center">
                        <h6>Remove</h6>
                    </div>
                    <div className="col-lg-2 d-flex justify-content-center">
                        <h6>Price</h6>
                    </div>
                    <hr />
                </div>
                {
                    Object.entries(cartItems).map(([id, { quantity, title, price, image }]) => (
                    <div className="row" key={id}>
                        <div className="col-12 col-lg-2 d-flex justify-content-center">
                            <img src={image} className="img-fluid" alt={title} width={150} />
                        </div>
                        <div className="col-12 col-12 col-lg-4 d-flex justify-content-start align-items-center">
                            <h5>{title}</h5>
                        </div>
                        <div className="col-4 col-lg-2 d-flex justify-content-center align-items-center">
                            <button className="btn btn-success me-2" onClick={() => dispatch(addedToCart({id: id,quantity: 1, title: title, price: price, image: image}))}>+</button>
                            <span className="bg-light me-2">{quantity}</span>
                            <button className="btn btn-success " onClick={() => dispatch(removedFromCart(id))}>-</button>

                        </div>
                        <div className="col-4 col-lg-2 d-flex justify-content-center align-items-center">
                            <button className="btn btn-outline-danger" onClick={() => dispatch(deletedFromCart(id))}><i class="bi bi-trash2-fill"></i></button>
                        </div>
                        <div className="col-4 col-lg-2 d-flex justify-content-center align-items-center">
                            {price}
                        </div>
                        
                    </div>
                ))}
                <div className="row">
                <div className="col-12 d-flex justify-content-end">
                    <h4>Total: ${total.toFixed(2)}</h4>
                </div>
                </div>
            </div>
                )
            : <div className='lead-2 text-center my-3'>cart is <span className='text-danger'>empty</span>, Hurry up before Items run out</div>
            }
            
        </>
    )
}