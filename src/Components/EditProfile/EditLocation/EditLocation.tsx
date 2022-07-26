import React, { useState,useEffect } from 'react';
import { Col, Container, Form, Row,Spinner} from "react-bootstrap";
import Input from "../../Input/Input";
import { authValidation } from "../../../lib/validation";
import Button from "../../Button/Button";
import LocationInput from "../../MapInput/MapInput";
import { ICoordinates } from "../../../interfaces";
import { errorNotify } from "../../../util/toast";
import Loader from '../../../util/loader';

const EditLocation = () => {
    const [selectedCoordinates, setSelectedCoordinates] = useState<ICoordinates | null>(null)
    const [loader, setLoader] = useState(true)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setLoader(false)
        }, 2000);
    }, [])

    const ChangeLocationHandler = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000);

        if (selectedCoordinates) {

            console.log(selectedCoordinates.lat,
                selectedCoordinates.lng)
        }

        else {
            errorNotify('Please Select Location');
        }
    }

    return (
        <Container>
            <h3>Edit Location</h3>
            {loader ? <Loader /> :
                <Form onSubmit={ChangeLocationHandler}>
                    <Row>
                        <Col md={12}>
                            <Input>
                                <Form.Label>Location</Form.Label>
                                <LocationInput selectedCoordinates={selectedCoordinates}
                                    setSelectedCoordinates={setSelectedCoordinates}
                                    showMap={true}
                                />
                            </Input>
                        </Col>
                        <Col md={12} className={'d-flex justify-content-end mt-4'}>
                            <Button type="submit">
                            {loading ? <Spinner animation="border" size="sm" /> : "Submit"}
                            </Button>
                        </Col>
                    </Row>
                </Form>
            }
        </Container>
    );
};

export default EditLocation;
