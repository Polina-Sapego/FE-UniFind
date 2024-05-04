import React, { useContext, useState } from 'react';
import {Container, Form} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {HOME_ROUTE, LOGIN_ROUTE, SIGNUP_ROUTE} from "../utils/consts";
import { registration, login } from '../http/userAPI';
import { observer } from 'mobx-react-lite';
import { Context } from '..';

const Auth = observer(() => {
    const navigate = useNavigate()
    const {user} = useContext(Context)
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [loginn, setLoginn] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('');
    
    const click = async () => {
        try {
            let data;
            if(isLogin) {
                data = await login(loginn, password);
            } else {
                data = await registration(loginn, password)
            }
            console.log(data)
            user.setUser(user)
            // const user = {login: "123321", password: "Polina1"};
            // user.setUser(user)
            user.setIsAuth(true)
            navigate(HOME_ROUTE)
        } catch (e) {
            // alert(e.response.data.message)
            console.log("ты балбес");
            console.log(e.response.data.message);
        }
    }
    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className="p-5">
                <h2 className="mx-auto">{isLogin? 'Log in' : 'Sign up'}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="Input your login..."
                        value={loginn}
                        onChange={e => setLoginn(e.target.value)}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Input your password..."
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type='password'
                    />
                    {/* {isLogin?
                    <div></div>
                    :
                    // <Form.Control
                    //     className="mt-3"
                    //     placeholder="Input your email..."
                    //     value={email}
                    //     onChange={e => setEmail(e.target.value)}
                    // />
                     <div></div>
                    } */}
                    <Row className="d-flex justify-content-between mt-3">
                        {isLogin ?
                            <div>
                                Don’t have an account? <NavLink to={SIGNUP_ROUTE}>Sign up</NavLink>
                            </div>
                            :
                            <div>
                                Already have an account? <NavLink to={LOGIN_ROUTE}>Sign in</NavLink>
                            </div>
                        }
                        <Button
                            variant={"outline-success"}
                            className="mt-3 ps-3 pe-3"
                            onClick={click}
                        >
                            {isLogin? 'Log in' : 'Sign up'}
                        </Button>
                    </Row>
                </Form>
            </Card>
        </Container>
    );
});

export default Auth;
