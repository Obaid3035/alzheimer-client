import React from 'react';
import SiteModal from "../../../../../Components/SiteModal/SiteModal";
import Button from "../../../../../Components/Button/Button";

const RegisterPopUp:React.FC<any> = ({show, setShow}) => {

    return (
        <SiteModal title={"Message"} show={show} onCloseModal={() => setShow(!show)}>
            <React.Fragment>
            <p>Registration is under observation and you will receive a confirmation email
                about the acceptance or rejection from the admin.</p>
                <h5>Thank you!</h5>
            <Button type={'button'} onClick={() => setShow(!show)}>
                Close
            </Button>
            </React.Fragment>
        </SiteModal>
    );
};

export default RegisterPopUp;
