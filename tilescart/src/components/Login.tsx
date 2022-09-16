import React from 'react'
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar'

export default function Login() {
    const navigate = useNavigate();
    return (
        <>
            <NavBar activate="login" />
            <div className="container d-flex justify-content-center align-items-center">
                <form className="form-inline m-5">
                    <div className="form-group mx-sm-3 mb-2">
                        <input type="email" className="form-control" placeholder="Email" required/>
                    </div>
                    <div className="form-group mx-sm-3 mb-2">
                        <input type="password" className="form-control" placeholder="Password" required minLength={8}/>
                    </div>
                    <button className="btn btn-primary" onClick={() => {
                        navigate('/');
                    }}>Login</button>
                </form>
            </div>
        </>
    )
}
