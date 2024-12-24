import React from 'react'
import { Link } from "react-router-dom";
export default function Singin() {
  return (
    <>
      <div>
       <form action="">
        <label htmlFor="">username</label>
        <input type="text" />
        <label htmlFor="">password</label>
        <input type="password" />
       <button>Sing In</button>
      </form>
      </div>
      <div>
      <p>
        Don't have an account? <Link to="/singup">Sign Up</Link>
      </p>
      </div>
    </>
  )
}
