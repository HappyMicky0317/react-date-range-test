import '../../assets/css/include/header.css';
import React, { useState } from 'react';

function Header(props) {
  return (
    <div>
      <div className="content">
        <div className="nav-bar">
          <h2 style={{color:"grey"}}>You can test <span style={{color:"red"}}>react-date-range</span> in person.</h2>
          <br/>
          <h5 style={{color:"grey"}}>Will coustomize this <span style={{color:"red"}}>react-date-range</span> opensource library </h5>
        </div>
      </div>
    </div>
  );
}

export default Header;