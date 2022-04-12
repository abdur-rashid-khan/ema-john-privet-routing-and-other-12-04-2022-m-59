import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.ini';

const SignIn = () => {
   const [email , setEmail] = useState('')
   const [createPass , setCreatePass] = useState('')
   const [conPass , setConPass] = useState('')
   const [error , setError] = useState('')

   const [createUserWithEmailAndPassword , user ,loading] = useCreateUserWithEmailAndPassword(auth)
   // for submit
   const submit =(e)=>{
      e.preventDefault();
      if(!createPass===conPass){
         error("create password and confirm password din't mach")
         return true;
      }
      createUserWithEmailAndPassword(email , conPass);
   }
   // for user
   const navigate = useNavigate();
   if(user){
      navigate('/')
   }
   if (loading) {
      return <p>Loading...</p>;
    }
   // for email 
   const emailValue =(e)=>{
      let condition = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
         if(!e.target.value.match(condition))
         {
            setError("UnValid email address!");
            return true;
         }
         setEmail(e.target.value)
   }
   // for crPassword
   const crPassword =(e)=>{
      let passCondition = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
      if(!e.target.value.match(passCondition)){
         setError( 'Enter Number , special character and Uppercase Mix')
         return true;
      }else{
         setError('')
      }
      setCreatePass(e.target.value)
   }
   // confirm password
   const conPassword =(e)=>{
      let passCondition = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
      if(!e.target.value.match(passCondition)){
         setError( 'Enter Number , special character and Uppercase Mix')
         return true;
      }else{
         setError('')
      }
      setConPass(e.target.value)
   }
   // 
   return (
      <div>
            <div className="pt-16">
         <div className="">
         <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div  className="max-w-md w-full space-y-8 bg-slate-200 p-5 rounded shadow-xl">
               <div>
                  <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 font-serif">
                     Sign In
                  </h2>
               </div>
               <form onSubmit={submit} className="mt-8 space-y-6">
               <input  type="hidden" name="remember" defaultValue="true" />
               <div className="rounded-md shadow-sm -space-y-px">
                  <div className="pt-4">
                     <label htmlFor="email-address" className="">
                     Email address
                     </label>
                     <input
                     onBlur={emailValue}
                     id="email-address"
                     name="email"
                     type="email"
                     autoComplete="email"
                     required
                     className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                     placeholder="Email address"
                     />
                  </div>
                  <div className="pt-4">
                     <label htmlFor="password" className="">
                     Password
                     </label>
                     <input
                     onBlur={crPassword}
                     id="password"
                     name="password"
                     type="password"
                     autoComplete="current-password"
                     required
                     className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                     placeholder="Password"
                     />
                  </div>
                  <div className="pt-4">
                     <label htmlFor="confirm-password" className="">
                     Confirm Password
                     </label>
                     <input
                     onBlur={conPassword}
                     id="confirm-password"
                     name="confirm-password"
                     type="password"
                     autoComplete="confirm-password"
                     required
                     className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                     placeholder="Confirm Password"
                     />
                  </div>
               </div>
               <p style={{color:'red'}}>
                  {
                     error?error:''
                  }
               </p>
               <div>
                  <button 
                     type="submit"
                     className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                     <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                     </span>
                     Sign in
                  </button>
                  <div className="text-center py-4">
                  <p>Already have an account? <Link className="text-indigo-700" to={'/login'}>Login</Link></p>
                  </div>
               </div>
               </form>
            </div>
         </div>
         </div>
      </div>
      </div>
   );
};

export default SignIn;