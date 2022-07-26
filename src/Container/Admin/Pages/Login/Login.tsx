import React, {useState} from 'react';
import {CgDanger} from "react-icons/cg";
import {Col, Form, Row} from "react-bootstrap";
import Input from "../../../../Components/Input/Input";
import {authValidation} from "../../../../lib/validation";
import Button from "../../../../Components/Button/Button";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";

interface ILoginInput {
    email: string,
    password: string,
}

const AdminLogin = () => {
    const navigate = useNavigate();

    const [errorMsg, setErrorMsg] = useState<any>(null);

    const {register, handleSubmit, formState: {errors}} = useForm<ILoginInput>({});

    const loginFormHandler = handleSubmit(data => {
        if(data.email === 'admin@gmail.com' || data.password === '12345678'){
            navigate('/admin/profile')
        }
        else{
            setErrorMsg('Email or password is incorrect')
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
            <Form onSubmit={loginFormHandler}>
                <Row>
                    <Col md={12}>
                        <Input>
                            <Form.Label>Email Address</Form.Label>
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
                        <Button type="submit" >
                            Login
                        </Button>
                    </Col>
                </Row>
            </Form>
        </div>
    );
};

export default AdminLogin;
