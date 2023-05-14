import React, { useState } from 'react'
import StripeContainer from '../StripeContainer'
import logo from "../assets/logoSolo.png"
const Products = () => {
  const [showItem, setShowItem] = useState(false)
  return (
    <div className='App'>
      <h1>Personal Training</h1>
      {showItem ? <StripeContainer/> : <><h3>$10.00</h3> <img src={logo} alt="logo" />
      <button onClick={() => setShowItem(true)}>Purchase a session</button></>}
    </div>
  )
}

export default Products