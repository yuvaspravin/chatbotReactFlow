import React from 'react'

const Navbar = ({ saveFlow }) => {
  return (
    <div className="savingChange">
    <button onClick={saveFlow}>Save Changes</button>
  </div>
  )
}

export default Navbar
