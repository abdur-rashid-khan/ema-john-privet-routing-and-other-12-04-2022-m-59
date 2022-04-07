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
            <CustomLink to='/shop'>shop</CustomLink>
            <CustomLink to='/order'>order</CustomLink>
            <CustomLink to='/inventory'>Manage Inventory</CustomLink>
         </div>
      </div>
      </nav>
   );
};

export default Navbar;