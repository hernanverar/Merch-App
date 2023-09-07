import React from 'react';
import band from "./images/band.jpeg";
import SearchIcon from "@mui/icons-material/Search";


function header() {
  return (
    <div className='header'>
      <img className="header__icon" src={band} />

      <div className="header__center">
        <input type="text" />
        <SearchIcon />
      </div>
    </div>
  )
}

export default header
