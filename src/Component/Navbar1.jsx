import { useSelector } from "react-redux";
import { Outlet, Link } from "react-router-dom";
import { selectCartItems } from './Storage/CartSlice';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navbar1 = () => {
    const products = useSelector(selectCartItems);
    const total = () => {
        return products.length;
    }


    return (
        <div className=" container    ">
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                   
                    <Nav className="me-auto">
                        <Link className="nav-link " to="/">Product</Link>
                        <Link className="nav-link " to="/card">Card</Link>
                     
                    </Nav>
                </Container>
            </Navbar>

            <div className="container  " style={{ marginTop: '20px' }}>
                <div class="d-flex justify-content-center "><span style={{ color: 'green' }}><strong>{total()}</strong> </span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">

                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />

                    </svg>
                </div>
            </div>
            <Outlet />
        </div>
    )
};

export default Navbar1;