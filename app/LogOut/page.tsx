'use client'
import React, { useState } from 'react'
import Login from '../Auth/Login/page'
import SignUp from '../Auth/SignUp/page' // Assuming you have a separate SignUp component

const Page = (props: any) => {
  const [showLogin, setShowLogin] = useState(true) // State to toggle between login and sign-up

  const togglePage = () => {
    setShowLogin(prev => !prev) // Toggle the state between true and false
  }

  return (
    <div>
      {showLogin ? <Login /> : <SignUp />}{' '}
      {/* Render either Login or SignUp based on state */}
      <button onClick={togglePage}>
        {/* Toggle button to switch between login and sign-up */}
        {showLogin ? 'Switch to Sign Up' : 'Switch to Login'}
      </button>
    </div>
  )
}

export default Page
