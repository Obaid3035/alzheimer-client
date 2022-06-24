import React from 'react';
import {Col, Container, Form, Row} from "react-bootstrap";
import Input from "../../../Components/Input/Input";
import Button from "../../../Components/Button/Button";
import {NavLink, useLocation} from "react-router-dom";

const Login = () => {
    const location = useLocation();
    let redirectUrl;
    if(location.pathname === '/caregiver/login'){
        redirectUrl =  <NavLink to={'/caregiver/register'}> Register </NavLink>
    }
    else if(location.pathname === '/lawyer/login'){
        redirectUrl = <NavLink to={'/lawyer/register'}> Register </NavLink>
    }
    return (
        <Container>
            <div className={'login_form'}>
                <h3>Login</h3>
                <Form>
                    <Row>
                        <Col md={12}>
                            <Input onSubmit={() => console.log('hello')}>
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="text" placeholder='Enter Your Email Address' />
                            </Input>
                        </Col>
                        <Col md={12}>
                            <Input onSubmit={() => console.log('hello')}>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder='Enter Your Password' />
                            </Input>
                        </Col>
                        <Col md={12} className={'d-flex justify-content-end mt-4'}>
                            <Button type="submit" onClick={() => console.log('hello')}>
                                Login
                            </Button>
                        </Col>
                    </Row>
                </Form>
                <p><NavLink to={'/forgot-password'}> Forgotten Password? </NavLink></p>
                <p>or</p>
                <p>Don't have an account? {redirectUrl}</p>
            </div>
        </Container>
    );
};
export default Login;