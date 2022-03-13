import React from 'react'
import "./Navbar.scss"
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

function Navbar() {
  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className='search'>
          <input placeholder='Search...' type="text"></input>
          <SearchOutlinedIcon/>
        </div>

      </div>
    </div>
  )
}

export default Navbar