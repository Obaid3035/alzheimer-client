import React from 'react';
import './MessageBox.scss';
import {useNavigate} from "react-router-dom";
import Avatar from '../../Assets/lekin.png';

const MessageBox = (props: { extraClasses: string }) => {
    const navigation = useNavigate();
    return (
        <div className={`message_box ${props.extraClasses}`}>
            <div className={'message_box_top'}>
                <h4>Messages</h4>
                <div>
                    <h4 onClick={() => navigation('/chat')}>
                        Chat
                        <span className='badge'>1</span>
                    </h4>
                </div>
            </div>
            <div className={'message_box_item'}>
                <img width={60} alt={'avatar'} src={Avatar} className={'img-fluid'} />
                <div className={'message_box_message'}>
                    <h5>Hamza</h5>
                    <p>Hello I am Lawyer</p>
                </div>
                <p>3 min ago</p>
            </div>
        </div>
    );
};

export default MessageBox;
