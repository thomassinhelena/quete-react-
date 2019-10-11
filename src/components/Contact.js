import React from 'react';
import './Contact.css'

function Contact(props) {
    return(
        <div className="Contact">
            <img alt="" src={props.avatar}/>
            <div>
            <h4>{props.name}</h4>
            {props.isOnline ?
                <div className="status">
                    <div className="status-online" /><p className="status-text">Online</p>
                </div> : 
                <div className="status">
                    <div className="status-offline" /><p className="status-text">Offline</p>
                </div>
            }
            </div>
        </div>
);
}

export default Contact;