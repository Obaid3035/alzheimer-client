import React from 'react';
import {Modal} from "react-bootstrap";
import {RiCloseCircleLine} from 'react-icons/ri';
import "./SiteModal.scss";


interface ISiteModal {
    title: string,
    show: boolean,
    onCloseModal: () => void;
    children?: JSX.Element,
}

const SiteModal: React.FC<ISiteModal> = ({ title, show, onCloseModal, children }) => {
    return (
        <Modal show={show} size={"sm"} backdrop="static" keyboard={false} className={"site_modal"}>
            <Modal.Header className={'modal_header'}>

                <RiCloseCircleLine onClick={onCloseModal} />
            </Modal.Header>
            <Modal.Body>{children}</Modal.Body>
        </Modal>
    );
};

export default SiteModal;
