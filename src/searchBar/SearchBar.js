import React from "react";
import "./SearchBar.css";

export default function SearchBar() {
    return (
        <form className="search-bar">
            <input className="search-input" type="text" placeholder="Search members" />
            <button className="search-button">Search</button>
        </form>
    );
    }