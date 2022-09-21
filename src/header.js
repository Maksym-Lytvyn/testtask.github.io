import React from 'react';
import catlogo from './cat_img.png';
import './header.css';

function Header() {
    return (
    <div className='header'>
        <img src={catlogo} className='logo' alt="logo" />
        <h5>TESTTASK</h5>
        <button className='btn btn1'>Users</button>
        <button className='btn btn2'>Signup</button> 
    </div>
    )   
}
export default Header;