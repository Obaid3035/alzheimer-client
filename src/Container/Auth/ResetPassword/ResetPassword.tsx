import React from 'react';
import {Col, Container, Form, Row} from "react-bootstrap";
import Input from "../../../Components/Input/Input";
import Button from "../../../Components/Button/Button";

const ResetPassword = () => {
    return (
        <Container className={'d-flex justify-content-center align-items-center flex-column'} style={{height: '100vh'}}>
            <div className={'login_form'}>
                <h3>Reset Password</h3>
                <Form>
                    <Row>
                        <Col md={12}>
                            <Input onSubmit={() => console.log('hello')}>
                                <Form.Label>New Password</Form.Label>
                                <Form.Control type="text" placeholder='Enter Your New Password' />
                            </Input>
                        </Col>
                        <Col md={12}>
                            <Input onSubmit={() => console.log('hello')}>
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control type="text" placeholder='Enter Your Confirm Password' />
                            </Input>
                        </Col>
                        <Col md={12} className={'d-flex justify-content-end mt-4'}>
                            <Button type="submit" onClick={() => console.log('hello')}>
                                Submit
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        </Container>
    );
};
export default ResetPassword;