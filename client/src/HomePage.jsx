import React from 'react'
import "./HomePage.css"
import { useNavigate } from 'react-router-dom'

export default function HomePage() {
  const navigate = useNavigate();

  const goToSingIn = () => {
    // Programmatically navigate to the "/about" route
    navigate('/singin');
  };
  return (
    
    <>
      <div>
        <section className="nav">
         <h3>LoGO</h3>
         <button onClick={goToSingIn}>Sing IN</button>
        </section>
        <section></section>
      </div>
    </>
  
  )
}
