import React from "react";
import NavBar from "./navBar/NavBar";
import "./SettingsPage.css"

export default function SettingsPage() {
    return (
        <div>
            <NavBar />
            <div className="settings-bar">
                <label className="settings">Settings</label>
            </div>
            <div className="settings-page-container privacy">
                <label className="settings-page-label">Privacy</label>
                <button className="settings-button">Show Location</button>
            </div>
            <div className="settings-page-container profile">
                <label className="settings-page-label">Profile</label>
                <button className="settings-button">Edit Profile</button>
            </div>
            <div className="settings-page-container account">
                <label className="settings-page-label">Account</label>
                <button className="settings-button">Delete Account</button>
            </div>
        </div>
    )
}