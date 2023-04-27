import React from 'react';
import { useState, FormEvent } from "react";
import Link from "next/link";

interface Props {
    onFormSwitch: (formName: string) => void;
  }
export const Login = ({ onFormSwitch }: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email);
  };
    return(
        <div className="auth-form-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Login</h2>
          <label htmlFor="email">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="youremail@gmail.com"
            id="email"
            name="email"
          />
          <label htmlFor="password">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter Password"
            id="password"
            name="password"
          />
          <button className="btn" type="submit">
            LogIn
          </button>
        </form>
        {/* <button className="link-btn" onClick={() => onFormSwitch('Register')}>Don't have an account? Regester here.</button> */}
        <button className="link-btn">
        <Link className="linkto" href="../forgotpassword/forgotpassword">
          Forgot Password? restore here.
        </Link>
      </button>
      </div>
    )
}

export default Login;
    
    
    
    
    
    
    