import { Link } from "react-router"
import { useSelector } from "react-redux";
import Dropdown from 'react-bootstrap/Dropdown';
import { LanguageContext } from "../context/LanguageContext";
import { useContext } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown } from "react-bootstrap";
export default function Header(){
    const { language, setLanguage } = useContext(LanguageContext);
    const handleSelect = (lang) => {
        setLanguage(lang);
    };
    const cartItems = useSelector((state) => state.cart.items);
    return(
        <>
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
        <Navbar.Brand as={Link} to={'/'}>Products</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <div className="justify-content-end align-items-center">
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link as={Link} to="/register">Register</Nav.Link>
                <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                <span className="nav-item">
                    <Link className="nav-link me-3" to="/cart">
                        <button className="btn btn-outline-dark"><i className="bi bi-cart2"></i></button>
                        <div className="bg-light d-inline position-absolute top-20 ms-1" style={{fontSize:'16px'}}>
                            <span>{Object.keys(cartItems).length}</span>
                        </div>
                    </Link>
                </span>
                <NavDropdown title="Lang" onSelect={handleSelect}>
                <NavDropdown.Item eventKey="en" active={language === "en"}>EN</NavDropdown.Item>
                <NavDropdown.Item eventKey="ar" active={language === "ar"}>AR</NavDropdown.Item>
                <NavDropdown.Divider />
                </NavDropdown>
                
            </Nav>
            </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
      </>
    )
}