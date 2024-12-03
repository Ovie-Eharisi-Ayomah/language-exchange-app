import "./LogIn.css";

export default function LogIn() {
    return (
        <div className="login-page">
            <nav className="navbar">
                <div className="logo">Logo</div>
                <a href="/signup"><button className="signup-link">Sign Up</button></a>
            </nav>

            <main className="login-container">
                <form className="login-form">
                    <h1 className="login-title">Log In</h1>
                    <input type="email" className="form-input login-email" placeholder="Email" />
                    <input type="password" className="form-input login-password" placeholder="Password" />
                    
                    <div className="auth-buttons">
                        <button className="third-party-button google">Google</button>
                        <button className="third-party-button apple">Apple</button>
                        <button className="third-party-button facebook">Facebook</button>
                    </div>
            
                    <button type="submit" className="login-button">Log In</button>
                </form>
            </main>
        </div>
    )
}