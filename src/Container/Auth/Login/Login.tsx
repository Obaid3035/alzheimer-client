import React, {useEffect, useState} from 'react';
import {Col, Form, Row} from "react-bootstrap";
import Input from "../../../Components/Input/Input";
import Button from "../../../Components/Button/Button";
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {RegisterType, USER_ROLE, LoginType} from "../../../interfaces";
import {useForm} from "react-hook-form";

const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [loginType, setLoginType] = useState('')
    const {register, handleSubmit, setValue, formState: {errors}} = useForm<any>({});

    useEffect(() => {
        switch (location.pathname) {
            case LoginType.caregiver:
                setValue("role", USER_ROLE.CAREGIVER)
                setLoginType(LoginType.caregiver)
                break;
            case LoginType.lawyer:
                setValue("role", USER_ROLE.LAWYER)
                setLoginType(LoginType.lawyer)
                break;
        }
    }, [])

    const toRegisterHandler = () => {
        switch (loginType) {
            case LoginType.caregiver:
                navigate(RegisterType.caregiver)
                break
            case LoginType.lawyer:
                navigate(RegisterType.lawyer)
                break
        }
    }

    return (
            <div className={'login_form'}>
                <h3>Login</h3>
                <Form>
                    <Row>
                        <Col md={12}>
                            <Input>
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="text" placeholder='Enter Your Email Address' />
                            </Input>
                        </Col>
                        <Col md={12}>
                            <Input>
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
                <p>Don't have an account? <button onClick={toRegisterHandler} className={'btn_login'}> Register </button></p>
            </div>
    );
};
export default Login;