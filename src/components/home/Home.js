import React from 'react'
import { Link as LinkRouter } from 'react-router-dom';


const Home = () => {
  return (
    <div>
      <h1>Home</h1>

      <LinkRouter to="/scrollbar">scrollbar</LinkRouter>
    </div>
  )
}

export default Home
