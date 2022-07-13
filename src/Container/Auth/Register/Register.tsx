import React, {useState, useEffect} from 'react';
import {Col, Form, Row} from "react-bootstrap";
import './Register.scss';
import {authValidation} from "../../../lib/validation";
import { useForm } from "react-hook-form";
import Input from "../../../Components/Input/Input";
import Button from "../../../Components/Button/Button";
import LocationInput from "../../../Components/MapInput/MapInput";
import {useLocation, useNavigate} from "react-router-dom";
import {signUp} from "../../../api/auth";
import {getToken, setToken} from "../../../util/helper";
// @ts-ignore
import FileBase64 from 'react-file-base64';
import {ICoordinates, IRegister, RegisterType, USER_ROLE, LoginType} from "../../../interfaces";

const Register: React.FC<any> = ({loc, resume, name}) => {
    const location = useLocation();
    const navigate = useNavigate();

    const [selectedCoordinates, setSelectedCoordinates] = useState<ICoordinates | null>(null)
    const [registerType, setRegisterType] = useState('')
    const [getResume, setGetResume] = useState(null)

    const {register, handleSubmit, setValue, formState: {errors}} = useForm<any>({});

    useEffect(() => {
        switch (location.pathname) {
            case RegisterType.caregiver:
                setValue("role", USER_ROLE.CAREGIVER)
                setRegisterType(RegisterType.caregiver)
                break;
            case RegisterType.lawyer:
                setValue("role", USER_ROLE.LAWYER)
                setRegisterType(RegisterType.lawyer)
                break;
        }
    }, [])

    const toLogin = () => {
        switch (registerType) {
            case RegisterType.caregiver:
                navigate(LoginType.caregiver)
                break;
            case RegisterType.lawyer:
                navigate(LoginType.lawyer)
                break;
        }
    }

    const getImg = (e: any) => {
        setGetResume(e.base64)
    }

    const registerSubmit = handleSubmit((data) => {
        if(data.role === USER_ROLE.LAWYER){
            let userData = {
                email: data.email,
                password: data.password,
                name: data.name,
                phoneNumber: data.phoneNumber,
                role: data.role,
                location: {
                    lat: selectedCoordinates?.lat,
                    lng: selectedCoordinates?.lng
                },
                nic: data.nic,
                // resume: getResume,
                isVerified: false
            }

            signUp(userData)
                .then((res) => {
                    console.log('successful registered')
                    setToken(res.data.token)
                })
        }
        else{
            signUp(data)
                .then((res) => {
                    console.log('successful registered')
                    setToken(res.data.token)
                })
        }
    });

    return (
        <div className={'registration_form'}>
            <h3>{name} Registration</h3>
            <Form onSubmit={registerSubmit}>
                <Row>
                    <Col md={6}>
                        <Input>
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder='Enter Your Name'
                                          {...register("name", authValidation.name)}
                            />
                        </Input>
                    </Col>
                    <Col md={6}>
                        <Input>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" placeholder='Enter Your Email Address'
                                          {...register("email", authValidation.email)}
                            />
                        </Input>
                    </Col>
                    <Col md={6}>
                        <Input>
                            <Form.Label>phone number</Form.Label>
                            <Form.Control type="text" placeholder='Enter Your Phone Number'
                                          {...register("phoneNumber", authValidation.phone)}
                            />
                        </Input>
                    </Col>
                    <Col md={6}>
                        <Input>
                            <Form.Label>id number</Form.Label>
                            <Form.Control type="text" placeholder='Enter Your ID'
                                          {...register("nic", authValidation.nic)}
                            />
                        </Input>
                    </Col>
                    <Col md={6}>
                        <Input>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder='Enter Your Password'
                                          {...register("password", authValidation.password)}
                            />
                        </Input>
                    </Col>
                    <Col md={6}>
                        <Input>
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder='Enter Your confirm Password'
                                          {...register("confirmPassword", authValidation.password)}
                            />
                        </Input>
                    </Col>
                    <Col md={12}>
                        {
                            loc ? <Input>
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
                            resume ? <Input>
                                    <FileBase64
                                        multiple={ false }
                                        onDone={ getImg }
                                    />
                            </Input>
                                : null
                        }
                    </Col>
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