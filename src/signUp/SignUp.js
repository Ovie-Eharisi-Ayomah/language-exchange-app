import "./SignUp.css";

export default function SignUp() {
    return (
        <div className="signup-page">
            <nav className="navbar">
                <div className="logo">Logo</div>
                <a href="/login"><button className="login-link">Log In</button></a>
            </nav>

            <main className="signup-container">
                <form className="signup-form">
                    <h1 className="signup-title">Sign Up</h1>
                    <input type="text" className="form-input signup-name" placeholder="Name" />
                    <input type="email" className="form-input signup-email" placeholder="Email" />
                    <input type="password" className="form-input signup-password" placeholder="Password" />
                    
                    <div className="auth-buttons">
                        <button className="third-party-button google">Google</button>
                        <button className="third-party-button apple">Apple</button>
                        <button className="third-party-button facebook">Facebook</button>
                    </div>
            
                    <button type="submit" className="signup-button">Sign Up</button>
                </form>
            </main>
        </div>
    )
}