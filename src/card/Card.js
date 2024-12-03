import React from "react";
import "./Card.css"
import profile from "../profile.png"

const Card = ({ username, native, learning }) => {
    return(
        <div className="member-card">
            <div className="card-photo-lang">
                <img src={profile} alt="profile" className="card-photo"/>
                <div className="card-languages">
                    <h3 className="native">Native: {native}</h3>
                    <h3 className="learning">Learning: {learning}</h3>
                </div>
            </div>           
            <div className="card-name">
                {username}
            </div>
            
        </div>
    );
}

export default Card;