import React from 'react'
import { Link } from 'react-router-dom'

const Index = () => {
  return (
    <div>
        <h1>Home</h1>
        <Link to="/signup"><button>Signup</button></Link>
    </div>
  )
}

export default Index