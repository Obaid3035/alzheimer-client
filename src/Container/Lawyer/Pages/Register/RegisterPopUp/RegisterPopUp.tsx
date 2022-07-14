import React from 'react';
import SiteModal from "../../../../../Components/SiteModal/SiteModal";

const RegisterPopUp = () => {
    const [show, setShow] = React.useState(false)
    return (
        <SiteModal title={"Message"} show={show} onCloseModal={() => setShow(!show)}>
            <p>registration is under observation and they will receive a confirmation email
                about the acceptance or rejection from the admin</p>
        </SiteModal>
    );
};

export default RegisterPopUp;
