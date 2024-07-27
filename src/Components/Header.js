import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import { useState } from 'react';
import avt from '../Assets/trend-avatar-11.jpg'
import ListGroup from 'react-bootstrap/ListGroup';



const Header = () => {
    const [isShow, setShow] = useState(false)
    const handleShowInfo = () => {
        setShow(!isShow)
    }
    return (
        <Navbar className='navbar-container'>
            <Container>
                <Navbar.Brand className='navbar-title'>LOGO</Navbar.Brand>
                <Navbar.Collapse className='navbar-collapse'>
                    <Nav className='navbar-actions'>
                        <Nav.Link>Home</Nav.Link>
                        <Nav.Link>Our Services</Nav.Link>
                        <Nav.Link>About Us</Nav.Link>
                        <Nav.Link>Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <div>
                    {isShow === false ?
                        <Image
                            className='avt-user'
                            src={avt} roundedCircle
                            onClick={() => handleShowInfo()}
                        ></Image>
                        :
                        <>
                            <Image
                                className='avt-user'
                                src={avt} roundedCircle
                                onClick={() => handleShowInfo()}
                            ></Image>
                            <ListGroup className='list-user'>
                                <ListGroup.Item action>Profile</ListGroup.Item>
                                <ListGroup.Item action> Setting</ListGroup.Item>
                                <ListGroup.Item action>Logout</ListGroup.Item>
                            </ListGroup>
                        </>
                    }
                </div>

            </Container>
        </Navbar>
    );
}

export default Header;