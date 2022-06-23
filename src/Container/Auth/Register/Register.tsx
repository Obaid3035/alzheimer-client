import React from 'react';
import {Col, Container, Form, Row} from "react-bootstrap";
import './Register.scss';
import Input from "../../../Components/Input/Input";
import Button from "../../../Components/Button/Button";

const Register = () => {
    return (
        <React.Fragment>
            <Container>
                <div className={'registration_form'}>
                    <h3>Lawyer Registration</h3>
                    <Form>
                        <Row>
                            <Col md={6}>
                                <Input onSubmit={() => console.log('hello')}>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder='Enter Your Name' />
                                </Input>
                            </Col>
                            <Col md={6}>
                                <Input onSubmit={() => console.log('hello')}>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="text" placeholder='Enter Your Email Address' />
                                </Input>
                            </Col>
                            <Col md={6}>
                                <Input onSubmit={() => console.log('hello')}>
                                    <Form.Label>phone number</Form.Label>
                                    <Form.Control type="text" placeholder='Enter Your Phone Number' />
                                </Input>
                            </Col>
                            <Col md={6}>
                                <Input onSubmit={() => console.log('hello')}>
                                    <Form.Label>id number</Form.Label>
                                    <Form.Control type="text" placeholder='Enter Your ID' />
                                </Input>
                            </Col>
                            <Col md={12}>
                                <Input onSubmit={() => console.log('hello')}>
                                    <Form.Label>Location</Form.Label>
                                    <Form.Control type="text" placeholder='Enter Your Location' />
                                </Input>
                            </Col>
                            <Col md={4}>
                                <Input onSubmit={() => console.log('hello')}>
                                    <Form.Control type="file" className={'mt-3'}/>
                                </Input>
                            </Col>
                            <Col md={12} className={'d-flex justify-content-end'}>
                                <Button type="submit" onClick={() => console.log('hello')}>
                                    Submit
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </Container>
        </React.Fragment>
    );
};
export default Register;