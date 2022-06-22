import React from 'react';
import './SearchLocation.scss';
import Input from "../../../../Components/Input/Input";
import {Form, Row, Col} from "react-bootstrap";
import Button from "../../../../Components/Button/Button";
import LocationIcon from '../../../../Assets/location_icon.png';

const SearchLocation = () => {
    return (
        <div className={'search_location'}>
            <Form>
                <Row>
                    <Col md={9}>
                        <Input onSubmit={() => console.log('hello')}>
                            <Form.Control type="text" placeholder='Enter your Location to Find Lawyer' />
                        </Input>
                    </Col>
                    <Col md={2}>
                        <Button>
                            Search
                        </Button>
                    </Col>
                    <Col md={1}>
                        <img src={LocationIcon} alt={'location-icon'}/>
                    </Col>
                </Row>
            </Form>
        </div>
    );
};
export default SearchLocation;