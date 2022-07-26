import React, { useState, useEffect } from 'react';
import SiteModal from "../../../../../Components/SiteModal/SiteModal";
import { Col, Form, Row, Spinner } from "react-bootstrap";
import Button from "../../../../../Components/Button/Button";
import RatingStar from "../../../../../Components/RatingStar/RatingStar";
import Input from "../../../../../Components/Input/Input";
import './ReviewPopUp.scss';
import Loader from '../../../../../util/loader';

const ReviewPopUp: React.FC<any> = ({ show, setShow, popUpLoading }) => {
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState("");
    const [loading, setLoading] = useState(false);

    const onFormSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setLoading(true)

        setTimeout(() => {
            setLoading(false)
        }, 2000)

        let formData = {
            rating,
            comment
        }
        console.log(formData)
    }

    return (
        <SiteModal title={'Reviews'} show={show} size={'lg'} onCloseModal={() => setShow(!show)}>
            <div className={'review_modal'}>
                {
                    popUpLoading ? <Loader /> :

                        <Form onSubmit={onFormSubmit}>
                            <Row>
                                <Col md={12}>
                                    <Form.Label>Reviews</Form.Label>
                                    <RatingStar rating={4}
                                        changeRating={(value) => setRating(value)}
                                    />
                                </Col>
                                <hr />
                                <Col md={12}>
                                    <Input>
                                        <Form.Label>Comment</Form.Label>
                                        <Form.Control as="textarea" rows={5} placeholder='Enter Comment'
                                            value={comment}
                                            onChange={(e) => setComment(e.target.value)}
                                        />
                                    </Input>
                                </Col>
                                <Col md={12} className={'d-flex justify-content-end mt-4'}>
                                    <Button type="submit" onClick={() => console.log('')}>
                                        {loading ? <Spinner animation="border" size="sm" /> : "Submit"}
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                }
            </div>
        </SiteModal>
    );
};

export default ReviewPopUp;
