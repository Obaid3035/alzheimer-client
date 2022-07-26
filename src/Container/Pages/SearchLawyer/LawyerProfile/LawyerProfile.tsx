import React, { useState, useEffect } from 'react';
import './LawyerProfile.scss';
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import SearchLawyer1 from "../../../../Assets/search_main.png";
import Quote from "../../../../Components/Quote/Quote";
import Lawyer1 from "../../../../Assets/lawyer1.png";
import locationIcon from "../../../../Assets/location_icon2.png";
import Button from "../../../../Components/Button/Button";
import RatingStar from "../../../../Components/RatingStar/RatingStar";
import ReviewPopUp from "./ReviewPopUp/ReviewPopUp";
import Loader from "../../../../util/loader";

const LawyerProfile = () => {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true)
    const [popupLoader, setPopUpLoader] = useState(false)
    const [showModal, setShowModal] = useState(false)

    const giveReviewModal = () => {
        setPopUpLoader(true)

        setTimeout(() => {
            setPopUpLoader(false)
        }, 2000);

        setShowModal(true)

    }

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    }, [])


    return (
        <React.Fragment>
            <ReviewPopUp show={showModal} setShow={setShowModal} popUpLoading={popupLoader} />
            <Container fluid>
                <Row>
                    <Col md={5} className={'register_section1'}>
                        <div>
                            <h1>Profile</h1>
                        </div>
                    </Col>
                    <Col md={7} className={'LawyerRegister1_img'}>
                        <img src={SearchLawyer1} alt={'home'} />
                    </Col>
                </Row>
            </Container>
            <Container>
                <div className={'search_main'}>
                    <h3>PROFILE DETAIL</h3>
                    {
                        loading ? <Loader /> : <div className={'lawyer_details'}>
                            <Row className={'align-items-center'}>
                                <Col md={2} className={'text-center'}>
                                    <img src={Lawyer1} alt={'Lawyer_detail_img'} className={'Lawyer_detail_img'} />
                                </Col>
                                <Col md={7}>
                                    <h6>John Dabluw katle</h6>
                                    <p><img src={locationIcon} alt={'locationIcon'} className={'locationIcon'} /> 72 West Pheasant Dr. Alexa , VA 22304</p>
                                    <div className={'ratings'}>
                                        <RatingStar rating={4} />
                                        <p onClick={() => navigate('/reviews')}>REVIEWS</p>
                                    </div>
                                </Col>
                            </Row>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                                but also the leap into electronic typesetting, remaining essentially unchanged.</p>

                            <div>
                                <Button type={'button'} onClick={() => console.log('')}> Download CV</Button>
                                <Button type={'button'} onClick={() => console.log('')}> Message</Button>
                                <Button type={'button'} onClick={giveReviewModal}> Give Reviews </Button>
                            </div>
                        </div>
                    }
                </div>
            </Container>
            <Quote />
        </React.Fragment>
    );
};
export default LawyerProfile;