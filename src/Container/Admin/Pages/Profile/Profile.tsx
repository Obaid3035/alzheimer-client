import React, { useEffect, useState } from 'react';
import { Col, Container, Form, Row, Spinner } from "react-bootstrap";
import './Profile.scss';
import Input from "../../../../Components/Input/Input";
import { authValidation } from "../../../../lib/validation";
import Button from "../../../../Components/Button/Button";
import { useForm } from "react-hook-form";
import Loader from '../../../../util/loader'

interface IAdminProfile {
    email: string,
    password: string,
    newPassword: string,
    confirmPassword: string,
}

const Profile = () => {
    const [loading, setLoading] = useState(false)
    const [loader,setLoader] = useState(true)

    const { register, handleSubmit, formState: { errors } } = useForm<IAdminProfile>();

    const FormHandler = handleSubmit(data => {
        setLoading(true)

        setTimeout(() => {
            setLoading(false)
            console.log(data)
        }, 2000)
    })

    useEffect(() => {
        setTimeout(() => {
            setLoader(false)
        }, 2000);
    }, [])


    return (
        <div className={'page_responsive'}>
            <h1> Edit Profile </h1>
            <div className={'profile_main py-5'}>
                {loader ? <Loader /> :
                    <Container>
                        <Form onSubmit={FormHandler}>
                            <Row>
                                <Col md={6}>
                                    <Input>
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="text" disabled placeholder='Enter Your Email Address'
                                        />
                                    </Input>
                                </Col>
                                <Col md={6}>
                                    <Input>
                                        <Form.Label>Current Password</Form.Label>
                                        <Form.Control type="password" placeholder='Enter Your Password'
                                            {...register("password", authValidation.password)}
                                        />
                                        {errors.password ? <small className={"text-danger"}>{errors.password?.message}</small> : null}
                                    </Input>
                                </Col>
                                <Col md={6}>
                                    <Input>
                                        <Form.Label>New Password</Form.Label>
                                        <Form.Control type="password" placeholder='Enter Your confirm Password'
                                            {...register("confirmPassword", authValidation.password)}
                                        />
                                        {errors.confirmPassword ? <small className={"text-danger"}>{errors.confirmPassword?.message}</small> : null}
                                    </Input>
                                </Col>
                                <Col md={6}>
                                    <Input>
                                        <Form.Label>Confirm Password</Form.Label>
                                        <Form.Control type="password" placeholder='Enter Your confirm Password'
                                            {...register("confirmPassword", authValidation.password)}
                                        />
                                        {errors.confirmPassword ? <small className={"text-danger"}>{errors.confirmPassword?.message}</small> : null}
                                    </Input>
                                </Col>
                                <Col md={12} className={'d-flex justify-content-end mt-4'}>
                                    <Button type="submit">
                                        {loading ? <Spinner animation="border" size="sm" /> : "Submit"}
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Container>
                }
            </div>
        </div>
    );
};
export default Profile;