import React, {useEffect, useState} from 'react';
import {Col, Form, Row} from "react-bootstrap";
import Input from "../../../Components/Input/Input";
import Button from "../../../Components/Button/Button";
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {RegisterType, LoginType} from "../../../interfaces";
import {useForm} from "react-hook-form";
import {authValidation} from "../../../lib/validation";
import { CgDanger } from 'react-icons/cg';

interface ILoginInput {
    email: string,
    password: string,
}

const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [loginType, setLoginType] = useState('');
    const [errorMsg, setErrorMsg] = useState<any>(null);

    const {register, handleSubmit, formState: {errors}} = useForm<ILoginInput>({});

    useEffect(() => {
        switch (location.pathname) {
            case LoginType.caregiver:
                setLoginType(LoginType.caregiver)
                break;
            case LoginType.lawyer:
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

    const loginHandler = handleSubmit(data => {
        if(data.email === 'hamza@gmail.com' || data.password === '123456789'){
            navigate('/')
        }
        else{
            setErrorMsg('Email or Password is incorrect');
        }
    })

    return (
            <div className={'login_form'}>
                <h3>Login</h3>

                {
                    errorMsg ? (
                        <div className={'error_msg'}>
                            <p><CgDanger /> {errorMsg}</p>
                        </div>
                    )
                        : null
                }
                <Form onSubmit={loginHandler}>
                    <Row>
                        <Col md={12}>
                            <Input>
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="text" placeholder='Enter Your Email Address'
                                              {...register("email", authValidation.email)}
                                />
                                { errors.email ? <small className={"text-danger"}>{errors.email?.message}</small> : null }
                            </Input>
                        </Col>
                        <Col md={12}>
                            <Input>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder='Enter Your Password'
                                              {...register("password", authValidation.password)}
                                />
                                { errors.password ? <small className={"text-danger"}>{errors.password?.message}</small> : null }
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