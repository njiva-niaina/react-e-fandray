import "./login.css"
import {Link} from "react-router-dom"


export default function Login() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h2 className="loginLogo">e-fandray</h2>
                    <span className="loginDesc">
                        Connect with friends and the world around
                    </span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input type="email" placeholder="Email" className="loginInput" />
                        <input type="password" placeholder="Password" className="loginInput" />
                        <input type="submit" className="loginButton" value="Log In" />
                        <span className="loginForgot">Forgot your password?</span>
                        <button className="loginRegisterBtn" >Create a New Account</button>
                    </div>    
                </div>
                
            </div>
        </div>
    )
}
