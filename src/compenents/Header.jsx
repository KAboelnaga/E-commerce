import { Link } from "react-router"
export default function Header(){
    return(
        <nav className="navbar navbar-light navbar-expand-lg bg-light min-vw-100 ">
                    <Link className="navbar-brand ms-3" to="/">Products</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end align-items-center ">
                    <ul className="navbar-nav me-3 align-items-center">
                        <li className="nav-item">
                        <Link className="nav-link"  to="/register">Register</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/cart">
                            <button className="btn btn-outline-dark"><i className="bi bi-cart2"></i></button>
                        </Link>
                        </li>
                    </ul>
                </div>
                
        </nav>
    )
}