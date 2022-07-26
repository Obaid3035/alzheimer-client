import React, { useState, useEffect } from 'react';
import { Col, Form, Row, Container, Spinner } from "react-bootstrap";
import Input from "../../Input/Input";
import { authValidation } from "../../../lib/validation";
import Button from "../../Button/Button";
import { useForm } from "react-hook-form";
import Loader from '../../../util/loader';

interface IEditInformation {
    name: string,
    phoneNumber: string,
    nic: string,
    bio: string
}

const EditInformation = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<IEditInformation>();
    const [loader, setLoader] = useState(true)
    const [loading,setLoading] = useState(false)


    useEffect(() => {
        setTimeout(() => {
            setLoader(false)
        }, 2000);
    }, [])


    const informationHandler = handleSubmit((data => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000);
        console.log(data)
    }))



    return (
        <Container>
            <h3>Edit Information</h3>
            {loader ? <Loader /> :
                <Form onSubmit={informationHandler}>
                    <Row>
                        <Col md={6}>
                            <Input>
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder='Enter Your Name'
                                    {...register("name", authValidation.name)}
                                />
                                {errors.name ? <small className={"text-danger"}>{errors.name?.message}</small> : null}
                            </Input>
                        </Col>
                        <Col md={6}>
                            <Input>
                                <Form.Label>phone number</Form.Label>
                                <Form.Control type="text" placeholder='Enter Your Phone Number'
                                    {...register("phoneNumber", authValidation.phone)}
                                />
                                {errors.phoneNumber ? <small className={"text-danger"}>{errors.phoneNumber?.message}</small> : null}
                            </Input>
                        </Col>
                        <Col md={12}>
                            <Input>
                                <Form.Label>id number</Form.Label>
                                <Form.Control type="text" placeholder='Enter Your ID'
                                    {...register("nic", authValidation.nic)}
                                />
                                {errors.nic ? <small className={"text-danger"}>{errors.nic?.message}</small> : null}
                            </Input>
                        </Col>
                        <Col md={12}>
                            <Input>
                                <Form.Label>Short Bio</Form.Label>
                                <Form.Control as="textarea" rows={5} placeholder='Enter Your short bio'
                                    {...register("bio")}
                                />
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

export default EditInformation;
