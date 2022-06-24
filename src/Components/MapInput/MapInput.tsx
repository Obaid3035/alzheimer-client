import React, {useState} from 'react';
import {GoogleApiWrapper, Map, mapEventHandler, Marker} from "google-maps-react";
import GooglePlacesAutocomplete, {geocodeByAddress, getLatLng} from "react-google-places-autocomplete";

interface ICoordinates {
    lat: number,
    lng: number
}

interface IMapInputProps {
    selectedCoordinates: ICoordinates | null,
    setSelectedCoordinates: React.Dispatch<React.SetStateAction<null | ICoordinates>>,
    google: any;
}

interface IMapInputProps {
    selectedCoordinates: ICoordinates | null,
    setSelectedCoordinates: React.Dispatch<React.SetStateAction<null | ICoordinates>>,
    google: any;
}

const MapInput: React.FC<IMapInputProps> = ({setSelectedCoordinates, selectedCoordinates, google}) => {
    const [markerCoordinates, setMarkerCoordinates] = useState<ICoordinates | null>(null);
    const [googlePlace, setGooglePlace] = useState<any>(null);

    const onPlaceSearch = (place: { label: string }) => {
        setSelectedCoordinates(null)
        setGooglePlace(place);
        geocodeByAddress(place.label)
            .then(results => getLatLng(results[0]))
            .then(({lat, lng}) => {
                    let coordinate = {
                        lat,
                        lng
                    }
                    setSelectedCoordinates(coordinate)
                    setMarkerCoordinates(coordinate)
                }
            );
    }

    return (
        <div className={'w-100'}>
            <GooglePlacesAutocomplete
                apiKey={'AIzaSyAy5GKZXkhiHbt_J_MN__a2ylt9N6jlN3U'}
                selectProps={{
                    className:'form_group',
                    placeholder: 'Enter Location',
                    value: googlePlace,
                    onChange: (place: any) => onPlaceSearch(place),
                }}
            />
        </div>
    );
};
export default GoogleApiWrapper({
    apiKey: 'AIzaSyAy5GKZXkhiHbt_J_MN__a2ylt9N6jlN3U'!
})(MapInput)