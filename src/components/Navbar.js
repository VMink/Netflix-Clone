import React, { useState, useEffect } from 'react';
import netflix from "../img/netflix-logo_0.png"
import avatar from "../img/1012c06c7e1b0f8f5e60611992785e5a.png"
import { GoTriangleDown } from "react-icons/go"
import { IoNotifications } from "react-icons/io5"
import { HiSearch } from "react-icons/hi"
import "./Navbar.css"

const Navbar = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    })
    return () => {
      window.removeEventListener("scroll")
    }
  }, [])

  return (
    <div className={`navbar ${show && 'scrolled_nav'}`}>
      <div className='left'>
        <img className='logo' src={netflix} alt="Netflix Logo" />
        <div className='navbar_btns'>
          <h3 className='navbar_btn'>Inicio</h3>
          <h3 className='navbar_btn'>Series</h3>
          <h3 className='navbar_btn'>Peliculas</h3>
          <h3 className='navbar_btn'>Novedades populares</h3>
          <h3 className='navbar_btn'>Mi lista</h3>
        </div>
        <div className='dropdown_menu'>
          <h3>Explorar</h3>
          <GoTriangleDown /> 
        </div>
      </div>
      <div className='right'>
        <div className='right_icons'>
          <HiSearch className='right_icon' />
          <IoNotifications className='right_icon' />
        </div>
        <img className='avatar' src={avatar} alt="Netflix Profle" />
      </div>
    </div>
  );
};

export default Navbar;
