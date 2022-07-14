import React, {useState} from 'react';
import './SearchLawyer.scss';
import {useNavigate} from "react-router-dom";
import {Col, Container, Row} from "react-bootstrap";
import SearchLawyer1 from "../../../Assets/search_main.png";
import Quote from "../../../Components/Quote/Quote";
import locationImg from "../../../Assets/location3.png";
import locationIcon from '../../../Assets/location_icon2.png'
import Lawyer1 from "../../../Assets/lawyer1.png";
import Button from "../../../Components/Button/Button";
import Pagination from "../../../Components/Pagination/Pagination";

const SearchLawyer = () => {
    const navigate = useNavigate();
    const [page, setPage] = useState(0);

    const lawyerDetail = () => {
        navigate('/lawyer-profile')
    }

    return (
        <React.Fragment>
            <Container fluid>
                <Row>
                    <Col md={5} className={'register_section1'}>
                        <div>
                            <h1>Search</h1>
                        </div>
                    </Col>
                    <Col md={7} className={'LawyerRegister1_img'}>
                        <img src={SearchLawyer1} alt={'home'} />
                    </Col>
                </Row>
            </Container>

            <Container>
                <div className={'search_main'}>
                    <div className={'location_search'}>
                        <img src={locationImg} alt="Search" />
                        <h5>959 Redwood Street Newman, GA 30263</h5>
                    </div>
                    <h3>RESULT</h3>

                    <Row>
                        <Col md={4}>
                            <div className={'lawyer_find'}>
                                <Row>
                                    <Col md={4} className={'text-center'}>
                                        <img src={Lawyer1} alt={'Lawyer1'} className={'lawyer_img'} />
                                    </Col>
                                    <Col md={8}>
                                        <h6>John Dabluw katle</h6>
                                        <p><img src={locationIcon} alt={'locationIcon'} className={'locationIcon'}/> 72 West Pheasant Dr. Alexa , VA 22304</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={12}>
                                        <p className={'mt-2'}>Lorem Ipsum is simply dummy text of the
                                            printing Dummy typesetting industry.</p>
                                    </Col>
                                </Row>
                                <Button type={'button'} onClick={lawyerDetail}>
                                    View Details
                                </Button>
                            </div>
                        </Col>
                    </Row>

                    <Pagination page={page} setPage={setPage} totalPage={5} />
                </div>
            </Container>

            <Quote />
        </React.Fragment>
    );
};
export default SearchLawyer;