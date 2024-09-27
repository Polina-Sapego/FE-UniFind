import React, { useContext } from 'react';
import { Context } from "../index";
import { Button, Container, Nav, Navbar, Dropdown } from "react-bootstrap";
import { ADMIN_ROUTE, CABINET_ROUTE, CATALOG_ROUTE, HOME_ROUTE, LOGIN_ROUTE } from "../utils/consts";
import { observer } from "mobx-react-lite";
import { useNavigate, NavLink } from "react-router-dom";
import image2 from 'C:/true-project/src/rub/1674365337_3-31.jpg';
import Col from "react-bootstrap/Col";

const NavBar = observer(() => {
    const { user } = useContext(Context);
    const navigate = useNavigate();

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    return (
       
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <NavLink style={{ color: 'white' }} to={HOME_ROUTE} className="me-auto navbar-brand">UniFind</NavLink>
                {user.isAuth ?
                    <Nav className="ms-lg-auto" style={{ color: 'white' }}>
                        <Button
                            variant="outline-light"
                            className="m-lg-1"
                            onClick={() => navigate(CATALOG_ROUTE)}
                        >
                            Университеты
                        </Button>
                        <Dropdown >
                            <Dropdown.Toggle style={{ height: '42px'}} className="m-lg-1" variant="outline-light" id="dropdown-basic">
                                Меню
                            </Dropdown.Toggle>
                            <Dropdown.Menu style={{ maxHeight: '200px', overflowY: 'auto' }}>
                                <Dropdown.Item onClick={() => navigate(ADMIN_ROUTE)}>Панель админа</Dropdown.Item>
                                <Dropdown.Item onClick={logOut}>Выйти</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Button
                        
                            variant="outline-light"
                            className="profile-button "
                            onClick={() => navigate(CABINET_ROUTE)}
                        >
                            <img src={image2} alt="Profile" className="profile-photo" />
                            
                        </Button>
                        
                    </Nav> :
                    <Nav className="ms-lg-auto" style={{ color: 'white' }}>
                        <Button variant={"outline-light"} className="m-lg-1" onClick={() => navigate(LOGIN_ROUTE)}>Sign in</Button>
                        
                    </Nav>
                }
            </Container>
           
        </Navbar>
        
    );


    
   

});

export default NavBar
