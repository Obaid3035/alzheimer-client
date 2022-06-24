import React, {useState} from 'react';
import './SearchLocation.scss';
import Input from "../../../../Components/Input/Input";
import {Form, Row, Col} from "react-bootstrap";
import Button from "../../../../Components/Button/Button";
import LocationIcon from '../../../../Assets/location_icon.png';
import LocationInput from "../../../../Components/MapInput/MapInput";

interface ICoordinates {
    lat: number,
    lng: number
}

const SearchLocation = () => {
    const [selectedCoordinates, setSelectedCoordinates] = useState<ICoordinates | null>(null)
    return (
        <div className={'search_location'}>
            <Form>
                <Row>
                    <Col md={8}>
                        <Input onSubmit={() => console.log('hello')}>
                            <LocationInput selectedCoordinates={selectedCoordinates}
                                           setSelectedCoordinates={setSelectedCoordinates}/>
                        </Input>
                    </Col>
                    <Col md={3}>
                        <Button type="submit" onClick={() => console.log('hello')}>
                            Search
                        </Button>
                    </Col>
                    <Col md={1} className={'location_img'}>
                        <img src={LocationIcon} alt={'location-icon'}/>
                    </Col>
                </Row>
            </Form>
        </div>
    );
};
export default SearchLocation;