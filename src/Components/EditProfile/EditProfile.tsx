import React, {useState} from 'react';
import './EditProfile.scss';
import {BiChevronRight} from 'react-icons/bi';
import Quote from "../Quote/Quote";
import Avatar from "../../Assets/lawyer1.png";
import { AiOutlineCamera } from "react-icons/ai";
import {Col, Container, Form, Row} from "react-bootstrap";
import EditInformation from "./EditInformation/EditInformation";
import EditPassword from "./EditPassword/EditPassword";
import EditResume from "./EditResume/EditResume";
import EditLocation from "./EditLocation/EditLocation";
import Button from "../Button/Button";

export enum profile {
    INFORMATION = 'information',
    PASSWORD = "password",
    LOCATION = 'location',
    RESUME = 'resume'
}

const EditProfile= () => {
    const [activeTab, setActiveTab] = useState(profile.INFORMATION)
    const [selectedFile, setSelectedFile] = useState<null | File>(null);
    const [preview, setPreview] = useState<any>(null);

    let showSection = null;

    if(activeTab === profile.INFORMATION){
        showSection = <EditInformation />
    }
    else if(activeTab === profile.PASSWORD){
        showSection = <EditPassword />
    }
    else if(activeTab === profile.RESUME){
        showSection = <EditResume />
    }
    else if(activeTab === profile.LOCATION){
        showSection = <EditLocation />
    }

    const AvatarChangeHandler = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        console.log(selectedFile)
    }


    return (
        <React.Fragment>
            <Container className={'edit_profile'}>
                <Row>
                    <Col md={3} className={'imgSection'}>
                        <div className={'avatar'}>
                            <img src={preview ? preview : Avatar} alt={'avatar'} />
                        </div>
                        <Form onSubmit={AvatarChangeHandler}>
                            <div className={'input_file'}>
                                <input
                                    type="file"
                                    id="file-input"
                                    accept="image/png, image/jpeg"
                                    onChange={(e) => {
                                        setSelectedFile(e.target.files![0])
                                        setPreview(URL.createObjectURL(e.target.files![0]))
                                    }}
                                    className="file_input" />
                                <label className="file_label" htmlFor="file-input">
                                    <AiOutlineCamera />
                                    <span>Change Avatar</span>
                                </label>
                            </div>
                            <div className={'text-center'}>
                                <Button type={'submit'}>
                                    Upload
                                </Button>
                            </div>
                        </Form>

                        <div className={'tabs'}>
                            <ul>
                                <li className={activeTab === profile.INFORMATION ? "active" : ""} onClick={() => setActiveTab(profile.INFORMATION)}>
                                    <BiChevronRight />
                                    Personal Information
                                </li>
                                <li className={activeTab === profile.PASSWORD ? "active" : ""} onClick={() => setActiveTab(profile.PASSWORD)}>
                                    <BiChevronRight />
                                    Change Password
                                </li>
                                <li className={activeTab === profile.LOCATION ? "active" : ""} onClick={() => setActiveTab(profile.LOCATION)}>
                                    <BiChevronRight />
                                    Edit Location
                                </li>
                                <li className={activeTab === profile.RESUME ? "active" : ""} onClick={() => setActiveTab(profile.RESUME)}>
                                    <BiChevronRight />
                                    Change Resume
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col md={9}>
                        {showSection}
                    </Col>
                </Row>
            </Container>

            <Quote />
        </React.Fragment>
    );
};

export default EditProfile;
