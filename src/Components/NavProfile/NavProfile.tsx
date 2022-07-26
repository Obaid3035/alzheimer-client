import React from 'react';
import * as FiIcon from 'react-icons/fi';
import * as CgIcon from 'react-icons/cg';
import { useNavigate } from 'react-router-dom';
import './NavProfile.scss';
import { removeToken } from "../../util/helper";

const NavProfileBox = (props: { extraClasses: string }) => {
    const navigation = useNavigate();

    const onLogOutHandler = () => {
        removeToken();
        navigation("/")
    }

    return (
        <div className={`profile_dropdown ${props.extraClasses}`}>
            <div>
                <div className={'profile_dropdown_item'} onClick={() => navigation('/edit-profile')}>
                    <CgIcon.CgProfile />
                    <p>Profile</p>
                </div>
                <div className={'profile_dropdown_item'} onClick={onLogOutHandler}>
                    <FiIcon.FiLogOut />
                    <p>Logout</p>
                </div>
            </div>
        </div>
    );
};
export default NavProfileBox;
