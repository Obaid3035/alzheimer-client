import React, {useState} from 'react';
import './SearchLocation.scss';
import {useNavigate} from "react-router-dom";
import Input from "../../../../Components/Input/Input";
import {Form, Row, Col} from "react-bootstrap";
import Button from "../../../../Components/Button/Button";
import LocationInput from "../../../../Components/MapInput/MapInput";
import {ICoordinates} from "../../../../interfaces";

const SearchLocation = () => {
    const navigate = useNavigate();
    const [selectedCoordinates, setSelectedCoordinates] = useState<ICoordinates | null>(null)
    const [locationError, setLocationError] = useState('')

    const LocationHandler = (e: any) => {
        e.preventDefault();
        if(selectedCoordinates){
            navigate('/search')
        }
        else{
            setLocationError('Please Enter Your Location')
        }
    }

    return (
        <div className={'search_location'}>
            <Form onSubmit={LocationHandler}>
                <Row>
                    <Col md={9}>
                        <Input>
                            <LocationInput selectedCoordinates={selectedCoordinates}
                                           setSelectedCoordinates={setSelectedCoordinates}
                                           showMap={false}
                            />
                            { locationError ? <small className={'text-danger'}>{locationError}</small> : null }
                        </Input>
                    </Col>
                    <Col md={3}>
                        <Button type="submit" onClick={() => console.log("")}>
                            Search
                        </Button>
                    </Col>
                </Row>
            </Form>
        </div>
    );
};
export default SearchLocation;