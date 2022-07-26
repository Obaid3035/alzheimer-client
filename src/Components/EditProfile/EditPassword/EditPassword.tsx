import React, { useState, useEffect } from 'react';
import { Col, Container, Form, Row, Spinner } from "react-bootstrap";
import Input from "../../Input/Input";
import { authValidation } from "../../../lib/validation";
import Button from "../../Button/Button";
import { useForm } from "react-hook-form";
import { errorNotify } from "../../../util/toast";
import Loader from '../../../util/loader';

interface IPassword {
    currentPassword: string,
    newPassword: string,
    confirmPassword: string
}

const EditPassword = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<IPassword>();
    const [loader, setLoader] = useState(true)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setLoader(false)
        }, 2000);
    }, [])

    let assumePassword = '12345678'

    const ChangePasswordHandler = handleSubmit((data => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000);
        if (data.currentPassword === assumePassword) {
            if (data.newPassword === data.confirmPassword) {
                if (assumePassword !== data.newPassword || assumePassword !== data.confirmPassword) {
                    console.log(data)
                }
                else {
                    errorNotify('Current Password & New Password must be different')
                }
            }
            else {
                errorNotify('New Password & Confirm Password are not same')
            }
        }
        else {
            errorNotify('Current Password is incorrect')
        }
    }))

    return (
        <Container>
            <h3>Change Password</h3>
            {loader ? <Loader /> :
                <Form onSubmit={ChangePasswordHandler}>
                    <Row>
                        <Col md={12}>
                            <Input>
                                <Form.Label>Current Password</Form.Label>
                                <Form.Control type="password" placeholder='Enter Your Password'
                                    {...register("currentPassword", authValidation.password)}
                                />
                                {errors.currentPassword ? <small className={"text-danger"}>{errors.currentPassword?.message}</small> : null}
                            </Input>
                        </Col>
                        <Col md={12}>
                            <Input>
                                <Form.Label>New Password</Form.Label>
                                <Form.Control type="password" placeholder='Enter Your Password'
                                    {...register("newPassword", authValidation.password)}
                                />
                                {errors.newPassword ? <small className={"text-danger"}>{errors.newPassword?.message}</small> : null}
                            </Input>
                        </Col>
                        <Col md={12}>
                            <Input>
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control type="password" placeholder='Enter Your Password'
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
            }
        </Container>
    );
};

export default EditPassword;
