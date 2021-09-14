import "./register.css"
import {Link} from "react-router-dom";


export default function Register() {
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
                        <input type="email" placeholder="Username" className="loginInput" />
                        <input type="email" placeholder="Email" className="loginInput" />
                        <input type="password" placeholder="Password" className="loginInput" />
                        <input type="password" placeholder="Password confirmation" className="loginInput" />
                        <input type="submit" value="Sign Up" className="loginButton"/>
                        <button className="loginRegisterBtn">Log into Account</button>
                    </div>    
                </div>
                
            </div>
        </div>
    )
}
