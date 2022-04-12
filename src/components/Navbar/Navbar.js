import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.ini';

import logo from '../../images/Logo.svg';
import CustomLink from '../Active/Active';
const Navbar = () => {
   const [user] = useAuthState(auth);
   
   const logOutAccount = () =>{
      signOut(auth);
   }
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
            {
               user? <button onClick={logOutAccount} style={{color:'#fff'}}>LogOut</button> : 
               <CustomLink to='/login'>Log in</CustomLink>
            }
         </div>
      </div>
      </nav>
   );
};

export default Navbar;