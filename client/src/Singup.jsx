import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Signup() {
    const usernameRef = useRef("");
    const emailRef = useRef("");
    const passwordRef = useRef("");

    const videInput = () =>{
       usernameRef.current.value = "";
      emailRef.current.value ="";
        passwordRef.current.value ="";
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const username = usernameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        videInput()

        console.log({ username, email, password })
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" id="username" ref={usernameRef}/>
        <label >Email</label>
        <input type="email" id="email" ref={emailRef}/>
        <label>Password</label>
        <input type="password" id="password" ref={passwordRef}/>
        <button type="submit">Sign Up</button>
      </form>
       <p>
        Already have an account? <Link to="/singin">Sign In</Link>
      </p> 
    </div>
  );
}
