import React, { useContext } from 'react';
import { Context } from "../index";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { ADMIN_ROUTE, CABINET_ROUTE, CATALOG_ROUTE, HOME_ROUTE, LOGIN_ROUTE, USER_ROUTE } from "../utils/consts";
import { observer } from "mobx-react-lite";
import { useNavigate, NavLink } from "react-router-dom";


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
                        <Button
                            variant="outline-light"
                            className="m-lg-1"
                            onClick={() => navigate(ADMIN_ROUTE)}
                        >
                            Панель админа
                        </Button>
                        <Button
                            variant="outline-light"
                            className="m-lg-1"
                            onClick={() => navigate(CABINET_ROUTE)}
                        >
                            Личный кабинет
                        </Button>
                        <Button
                            variant="outline-light"
                            className="m-lg-1"
                            onClick={() => logOut()}
                        >
                            Sign out
                        </Button>

                    </Nav> :
                    <Nav className="ms-lg-auto" style={{ color: 'white' }}>
                        <Button variant={"outline-light"} className="m-lg-1" onClick={() => navigate(LOGIN_ROUTE)}>Sign in</Button>

                    </Nav>
                }
            </Container>
        </Navbar>)
});

export default NavBar;
