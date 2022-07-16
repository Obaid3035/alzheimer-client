import React from 'react';
import {Modal} from "react-bootstrap";
import "./SiteModal.scss";


interface ISiteModal {
    title: string,
    show: boolean,
    onCloseModal: () => void;
    children?: JSX.Element,
}

const SiteModal: React.FC<ISiteModal> = ({ title, show, onCloseModal, children }) => {
    return (
        <Modal show={show} backdrop="static" keyboard={false} className={"site_modal"}>
            <Modal.Body>{children}</Modal.Body>
        </Modal>
    );
};
export default SiteModal;