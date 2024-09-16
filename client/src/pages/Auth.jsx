import React, { useState } from 'react';
import '../styles/Auth.css';
import { FaHandPeace } from "react-icons/fa6";

const Auth = () => {
  const [activeForm, setActiveForm] = useState('login');

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className='auth-main'>
      <div className='auth'>
        <div className='auth-welcome'>
          <div className='auth-welcome-first'>
            <h1>Welcome</h1>
            <div ><FaHandPeace className='auth-welcome-icon'/> </div>
          </div>
          <h3>Fill in the Details to get started with the best chat app ! </h3>
        </div>
        <div className="auth-buttons">
          <button
            onClick={() => setActiveForm('login')}
            className={activeForm === 'login' ? 'active' : ''}
          >
            Login
          </button>
          <button
            onClick={() => setActiveForm('signup')}
            className={activeForm === 'signup' ? 'active' : ''}
          >
            Sign Up
          </button>
        </div>

        <div className="auth-form">
          {activeForm === 'login' && (
            <div className="login-form">
              <h2>Login</h2>
              <form>
                <div>
                  <label>Email:</label>
                  <input type="email" value={email} placeholder="Enter your email" />
                </div>
                <div>
                  <label>Password:</label>
                  <input type="password" value={password} placeholder="Enter your password" />
                </div>
                <button type="submit">Login</button>
              </form>
            </div>
          )}

          {activeForm === 'signup' && (
            <div className="signup-form">
              <h2>Sign Up</h2>
              <form>
                <div>
                  <label>Email:</label>
                  <input type="email" placeholder="Enter your email" />
                </div>
                <div>
                  <label>Password:</label>
                  <input type="password" placeholder="Enter your password" />
                </div>
                <div>
                  <label>Confirm Password:</label>
                  <input type="password" placeholder="Confirm your password" />
                </div>
                <button type="submit">Sign Up</button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
