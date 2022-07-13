import React from 'react';
import {Col, Container, Form, Row} from "react-bootstrap";
import Input from "../../../Components/Input/Input";
import Button from "../../../Components/Button/Button";

const ForgetPassword = () => {
    return (
        <Container className={'d-flex justify-content-center align-items-center flex-column'} style={{height: '100vh'}}>
            <div className={'login_form'}>
                <h3>Forget Password</h3>
                <Form>
                    <Row>
                        <Col md={12}>
                            <Input>
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="text" placeholder='Enter Your Email for verification Link' />
                            </Input>
                        </Col>
                        <Col md={12} className={'d-flex justify-content-end mt-4'}>
                            <Button type="submit" onClick={() => console.log('hello')}>
                                Reset
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        </Container>
    );
};
export default ForgetPassword;