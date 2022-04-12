import React from 'react';

import logo from '../../images/Logo.svg';
import CustomLink from '../Active/Active';
const Navbar = () => {
   return (
      <nav>
         <div className='mane'>
         <div>
         <img className='logo' src={logo} alt="" />
         </div>
         <div className="mane-items">
            <CustomLink to='/shop'>Shop</CustomLink>
            <CustomLink to='/order'>Order</CustomLink>
            <CustomLink to='/contact'>Contact</CustomLink>
            <CustomLink to='/login'>Log in</CustomLink>
         </div>
      </div>
      </nav>
   );
};

export default Navbar;