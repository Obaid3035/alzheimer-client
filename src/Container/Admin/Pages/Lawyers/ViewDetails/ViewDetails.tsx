import React from 'react';
import './ViewDetails.scss';
import Button from "../../../../../Components/Button/Button";

const ViewDetails = () => {
    return (
        <div className={'page_responsive'}>
            <div className={'d-flex justify-content-between align-items-center'}>
                <h1>Lawyer Details</h1>
                <Button type='button'> Back </Button>
            </div>
        </div>
    );
};

export default ViewDetails;
