import React from 'react';
import Quote from "../../../Components/Quote/Quote";
import {Col, Container, Form, Row} from "react-bootstrap";
import LawyerRegister1 from "../../../Assets/lawyer-register1.jpg";
import LawyerRegister2 from "../../../Assets/lawyer-register2.jpg";
import './Register.scss';
import Input from "../../../Components/Input/Input";
import Button from "../../../Components/Button/Button";

const Register = () => {
    return (
        <React.Fragment>
            <Container fluid>
                <Row className={'w-100 h-100'}>
                    <Col md={5} className={'register_section1'}>
                        <div>
                            <h1>Estate Planning
                                and Elder Law
                                Attorneys</h1>
                            <h5>Join ALZ Nexus</h5>
                        </div>
                    </Col>
                    <Col md={7} className={'LawyerRegister1_img'}>
                        <img src={LawyerRegister1} alt={'home'} />
                    </Col>
                </Row>
            </Container>
            <Container className={'lawyer_section2'}>
                <Row>
                    <Col md={5}>
                        <img src={LawyerRegister2} alt={'LawyerRegister2'}/>
                    </Col>
                    <Col md={6}>
                        <h6>Why Join ALZ Nexus?</h6>
                        <p>ALZ Nexus was created to help families who have a loved one suffering from Alzheimer’s Disease connect
                            directly with trusted legal professionals to help them improve their circumstances
                            and secure valuables at a time of great vulnerability.</p>
                        <h6>Benefits of <span> Legal Professionals </span> who Join ALZ Nexus:</h6>
                        <ul>
                            <li>Build off referrals</li>
                            <li>Transact quicker with customers who need immediate help</li>
                            <li>Reduce spend on advertising and marketing in your local area</li>
                            <li>Expand client base within Alzheimer’s Disease and Dementia </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
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
                                <Button>
                                    Submit
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </Container>
            <Quote />
        </React.Fragment>
    );
};
export default Register;