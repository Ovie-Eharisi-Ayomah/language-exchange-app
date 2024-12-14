import React from "react";
import NavBar from "../navBar/NavBar"
import profile from "../profile.png"
import "./ProfilePage.css"

export default function ProfilePage() {
    return (
        <div>
            <NavBar />
            <div className="MemberInformation">
                <div className="name-bar">
                    <label className="profile-page-name">Ovie</label>
                </div>
                <div className="photo-age-location">
                    <img src={profile} alt="profile" className="profile-photo"/>
                    <div className="age-location">
                        <label className="profile-age">Age: 23</label>
                        <label className="location">Location: Abuja, Nigeria</label>
                    </div>
                </div>
                <div className="languages-bio">
                    <div className="languages">
                        <label className="language native">Native: English</label>
                        <label className="language learning">Learning: Spanish</label>
                    </div>
                    <label className="bio">Bio: haygcuyauvucva  uvauv haukvuse  uksuevc ae  ue et e ushag ku v ke u a  vw h k ukes hh gsuk</label>
                </div>
                <div>
                <button className="message-button">Message</button>
                </div>
            </div>
        </div>
    )
}