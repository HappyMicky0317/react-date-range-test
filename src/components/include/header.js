import '../../assets/css/include/header.css';
import logo from '../../assets/img/logo.png'
import nft from'../../assets/img/header-nft.png';
import menuIcon from '../../assets/img/mobile-menu-btn.png';
import closeIcon from '../../assets/img/close.png';
import React, { useState } from 'react';

function Header(props) {
  const [modalflag, setModalflag] = useState(false);
  const closemodal = () => {
    setModalflag(false)
  }
  const showmodal = () => {
    setModalflag(true)
  }
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