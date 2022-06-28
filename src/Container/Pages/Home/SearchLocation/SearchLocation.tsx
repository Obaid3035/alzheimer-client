import React, {useState} from 'react';
import './SearchLocation.scss';
import {useNavigate} from "react-router-dom";
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
    const navigate = useNavigate();

    const SearchLawyer = () => {
        navigate('/search')
    }

    const [selectedCoordinates, setSelectedCoordinates] = useState<ICoordinates | null>(null)
    return (
        <div className={'search_location'}>
            <Form>
                <Row>
                    <Col md={9}>
                        <Input onSubmit={() => console.log('hello')}>
                            <LocationInput selectedCoordinates={selectedCoordinates}
                                           setSelectedCoordinates={setSelectedCoordinates}
                                           showMap={false}
                            />
                        </Input>
                    </Col>
                    <Col md={3}>
                        <Button type="submit" onClick={SearchLawyer}>
                            Search
                        </Button>
                    </Col>
                </Row>
            </Form>
        </div>
    );
};
export default SearchLocation;