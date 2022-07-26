import React, { useState, useEffect } from 'react';
import './Reviews.scss';
import Avatar from '../../../../../Assets/lawyer1.png'
import { Col, Container, Row } from "react-bootstrap";
import RatingStar from "../../../../../Components/RatingStar/RatingStar";
import Quote from "../../../../../Components/Quote/Quote";
import Pagination from "../../../../../Components/Pagination/Pagination";
import Loader from "../../../../../util/loader";

const Reviews = () => {
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    }, [])


    return (
        <React.Fragment>
            <Container className={'all_reviews'}>
                <h2>Reviews</h2>

                {loading ? <Loader /> :
                    <Row className={'justify-content-center'}>
                        <Col md={11} className={'particular_review'}>
                            <Row>
                                <Col md={1}>
                                    <div className={'avatar_column'}>
                                        <img src={Avatar} alt={'avatar'} />
                                    </div>
                                </Col>
                                <Col md={9}>
                                    <h6>john dabluw katle</h6>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                                        galley of type and scrambled it to make a type specimen book.</p>
                                    <hr />
                                    <small>1 day ago</small>
                                </Col>
                                <Col md={2} className={'stars_col'}>
                                    <RatingStar rating={4} />
                                </Col>
                            </Row>
                        </Col>
                        <Col md={11} className={'particular_review'}>
                            <Row>
                                <Col md={1}>
                                    <div className={'avatar_column'}>
                                        <img src={Avatar} alt={'avatar'} />
                                    </div>
                                </Col>
                                <Col md={9}>
                                    <h6>john dabluw katle</h6>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                                        galley of type and scrambled it to make a type specimen book.</p>
                                    <hr />
                                    <small>1 day ago</small>
                                </Col>
                                <Col md={2} className={'stars_col'}>
                                    <RatingStar rating={4} />
                                </Col>
                            </Row>
                        </Col>
                        <Col md={11} className={'particular_review'}>
                            <Row>
                                <Col md={1}>
                                    <div className={'avatar_column'}>
                                        <img src={Avatar} alt={'avatar'} />
                                    </div>
                                </Col>
                                <Col md={9}>
                                    <h6>john dabluw katle</h6>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                                        galley of type and scrambled it to make a type specimen book.</p>
                                    <hr />
                                    <small>1 day ago</small>
                                </Col>
                                <Col md={2} className={'stars_col'}>
                                    <RatingStar rating={4} />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                }

                <Pagination page={page} setPage={setPage} totalPage={5} />
            </Container>
            <Quote />
        </React.Fragment>
    );
};
export default Reviews;