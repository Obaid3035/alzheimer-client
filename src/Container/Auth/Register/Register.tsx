import React, {useState} from 'react';
import {Col, Form, Row} from "react-bootstrap";
import './Register.scss';
import {authValidation} from "../../../lib/validation";
import {useForm} from "react-hook-form";
import Input from "../../../Components/Input/Input";
import Button from "../../../Components/Button/Button";
import LocationInput from "../../../Components/MapInput/MapInput";
import {useNavigate} from "react-router-dom";
import {ICoordinates, LoginType, USER_ROLE} from "../../../interfaces";
import RegisterPopUp from "../../Lawyer/Pages/Register/RegisterPopUp/RegisterPopUp";
import {errorNotify, successNotify} from "../../../util/toast";

interface IRegister {
    role: USER_ROLE
    heading: string
}

interface IRegisterInput {
    email: string,
    password: string
    confirmPassword: string
    name: string,
    phoneNumber: string,
    role: USER_ROLE,
    location: {
        lat: number,
        lng: number
    },
    nic: string,
    resume: File[],
    isVerified: boolean
}

const Register: React.FC<IRegister> = ({role, heading}) => {
    const navigate = useNavigate();

    const [selectedCoordinates, setSelectedCoordinates] = useState<ICoordinates | null>(null)
    const [showModal, setShowModal] = useState(false)
    const {register, handleSubmit, formState: {errors}} = useForm<IRegisterInput>();


    const toLogin = () => {
        switch (role) {
            case USER_ROLE.CAREGIVER:
                navigate(LoginType.caregiver)
                break;
            case USER_ROLE.LAWYER:
                navigate(LoginType.lawyer)
                break;
        }
    }

    const registerSubmit = handleSubmit((data => {
        if(role === USER_ROLE.LAWYER){
            if(selectedCoordinates) {
                if(data.password === data.confirmPassword){
                    let userData = {
                        email: data.email,
                        password: data.password,
                        name: data.name,
                        phoneNumber: data.phoneNumber,
                        role: role,
                        location: {
                            lat: selectedCoordinates?.lat,
                            lng: selectedCoordinates?.lng
                        },
                        nic: data.nic,
                        resume: data.resume[0],
                        isVerified: false
                    }
                    if(userData){
                        setShowModal(true)
                    }
                }
                else{
                    errorNotify("Passwords didn't match")
                }
            }
            else{
                errorNotify('Please Select Location')
            }
        }
        else{
            if(data.password === data.confirmPassword){
                let userData = {
                        email: data.email,
                        password: data.password,
                        name: data.name,
                        phoneNumber: data.phoneNumber,
                        role: role,
                        nic: data.nic,
                    }
                    if(userData){
                        successNotify('Successfully Registered')
                    }
                }
            else{
                errorNotify("Passwords didn't match")
            }
        }

    }));

    let additionalField = null;

    if (role === USER_ROLE.LAWYER) {
        additionalField = (
            <React.Fragment>
                <Col md={12}>
                    <Input>
                        <Form.Label>Location</Form.Label>
                        <LocationInput selectedCoordinates={selectedCoordinates}
                                       setSelectedCoordinates={setSelectedCoordinates}
                                       showMap={true}
                        />
                    </Input>
                </Col>
                <Col md={4}>
                    <Input>
                        <Form.Control
                            type="file"
                            placeholder='Choose file'
                            {...register("resume", authValidation.resume)}
                        />
                        { errors.resume ? <small className={"text-danger"}>{errors.resume?.message}</small> : null }
                    </Input>
                </Col>
            </React.Fragment>
        )
    }

    return (
        <div className={'registration_form'}>
            <RegisterPopUp  show={showModal} setShow={setShowModal} />
            <h3>{heading} Registration</h3>
            <Form onSubmit={registerSubmit}>
                <Row>
                    <Col md={6}>
                        <Input>
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder='Enter Your Name'
                                          {...register("name", authValidation.name)}
                            />
                            { errors.name ? <small className={"text-danger"}>{errors.name?.message}</small> : null }
                        </Input>
                    </Col>
                    <Col md={6}>
                        <Input>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" placeholder='Enter Your Email Address'
                                          {...register("email", authValidation.email)}
                            />
                            { errors.email ? <small className={"text-danger"}>{errors.email?.message}</small> : null }
                        </Input>
                    </Col>
                    <Col md={6}>
                        <Input>
                            <Form.Label>phone number</Form.Label>
                            <Form.Control type="text" placeholder='Enter Your Phone Number'
                                          {...register("phoneNumber", authValidation.phone)}
                            />
                            { errors.phoneNumber ? <small className={"text-danger"}>{errors.phoneNumber?.message}</small> : null }
                        </Input>
                    </Col>
                    <Col md={6}>
                        <Input>
                            <Form.Label>id number</Form.Label>
                            <Form.Control type="text" placeholder='Enter Your ID'
                                          {...register("nic", authValidation.nic)}
                            />
                            { errors.nic ? <small className={"text-danger"}>{errors.nic?.message}</small> : null }
                        </Input>
                    </Col>
                    <Col md={6}>
                        <Input>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder='Enter Your Password'
                                          {...register("password", authValidation.password)}
                            />
                            { errors.password ? <small className={"text-danger"}>{errors.password?.message}</small> : null }
                        </Input>
                    </Col>
                    <Col md={6}>
                        <Input>
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder='Enter Your confirm Password'
                                          {...register("confirmPassword", authValidation.password)}
                            />
                            { errors.confirmPassword ? <small className={"text-danger"}>{errors.confirmPassword?.message}</small> : null }
                        </Input>
                    </Col>
                    {additionalField}
                    <Col md={12} className={'d-flex justify-content-end mt-4'}>
                        <Button type="submit" onClick={() => console.log('')}>
                            Submit
                        </Button>
                    </Col>
                </Row>
            </Form>
            <p>Already have an account? <button onClick={toLogin} className={'btn_login'}> Login </button></p>
        </div>
    );
};
export default Register;
