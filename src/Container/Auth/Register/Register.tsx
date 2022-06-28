import React, {useState} from 'react';
import {Col, Container, Form, Row} from "react-bootstrap";
import './Register.scss';
import Input from "../../../Components/Input/Input";
import Button from "../../../Components/Button/Button";
import LocationInput from "../../../Components/MapInput/MapInput";
import {NavLink, useLocation} from "react-router-dom";

interface ICoordinates {
    lat: number,
    lng: number
}

interface IRegister{
    loc: boolean,
    resume: boolean,
    name: string
}

const Register: React.FC<IRegister> = ({loc, resume, name}) => {
    const [selectedCoordinates, setSelectedCoordinates] = useState<ICoordinates | null>(null)
    const location = useLocation();
    let redirectUrl;
    if(location.pathname === '/caregiver/register'){
        redirectUrl =  <NavLink to={'/caregiver/login'}> Login </NavLink>
    }
    else if(location.pathname === '/lawyer/register'){
        redirectUrl = <NavLink to={'/lawyer/login'}> Login </NavLink>
    }

    return (
            <Container>
                <div className={'registration_form'}>
                    <h3>{name} Registration</h3>
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
                            <Col md={6}>
                                <Input onSubmit={() => console.log('hello')}>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder='Enter Your Password' />
                                </Input>
                            </Col>
                            <Col md={6}>
                                <Input onSubmit={() => console.log('hello')}>
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control type="password" placeholder='Enter Your confirm Password' />
                                </Input>
                            </Col>
                            <Col md={12}>
                                {
                                    loc ? <Input onSubmit={() => console.log('hello')}>
                                        <Form.Label>Location</Form.Label>
                                        <LocationInput selectedCoordinates={selectedCoordinates}
                                                       setSelectedCoordinates={setSelectedCoordinates}
                                                       showMap={true}
                                        />
                                    </Input>
                                        : null
                                }
                            </Col>
                            <Col md={4}>
                                {
                                    resume ? <Input onSubmit={() => console.log('hello')}>
                                        <Form.Control type="file" className={'mt-3'}/>
                                    </Input>
                                        : null
                                }
                            </Col>
                            <Col md={12} className={'d-flex justify-content-end mt-4'}>
                                <Button type="submit" onClick={() => console.log('hello')}>
                                    Submit
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                    <p>Already have an account? {redirectUrl}</p>
                </div>
            </Container>
    );
};
export default Register;