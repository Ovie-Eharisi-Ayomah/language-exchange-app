import React from "react";
import "./NavBar.css"

function NavBar() {
    return(
        <nav className="nav-bar">
            <div className="nav-bar-main">
                <button>Logo</button>
                <button>Chat</button>
                <button>Profile</button>
                <button>Settings</button>
            </div>
            <div className="log-out">
                <button>Log-out</button>
            </div>
        </nav>
    )
}

export default NavBar