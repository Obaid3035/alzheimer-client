import React from 'react';
import {Button} from "react-bootstrap";
import "./Button.scss";

const button = ({children}:any) => {
    return (
        <Button className={'btn_style'}>
            {children}
        </Button>
    );
};

export default button;
