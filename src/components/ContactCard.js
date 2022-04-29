import React from 'react';
import user from "../images/user-icon.png"


const ContactCard = (props) => {


    const {id, name, phone} = props.contact;

    return (
        <div className="item">
            <img className="ui avatar image" src={user} alt="user"></img>
            <div className="content">
                <div className="header">{name}</div>
                <div>{phone}</div>  
            </div>   
            <i className="trash alternate outline icon" style={{ color: "red", marginTop: "7px" }} onClick={() => props.clickHandler(id)}></i>
        </div>
    );
};

export default ContactCard;
