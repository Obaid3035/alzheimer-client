import React from 'react';
import {Form} from "react-bootstrap";
import './Input.scss';

interface IInput {
    children: any;
    onSubmit: () => void
}

const Input:React.FC<IInput> = (props) => {
    return (
        <Form.Group className={'form_group'} onSubmit={props.onSubmit}>
            {props.children}
        </Form.Group>
    );
};
export default Input;