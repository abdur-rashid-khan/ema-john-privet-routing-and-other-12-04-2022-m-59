   import React from "react";
import { Link } from "react-router-dom";

   const Login = () => {
   return (
      <div className="pt-16">
         <div className="">
         <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div id="formContent" className="max-w-md w-full space-y-8 bg-slate-200 p-5 rounded shadow-xl">
               <div>
                  <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 font-serif">
                     Log In
                  </h2>
               </div>
               <form className="mt-8 space-y-6" action="#" method="POST">
               <input type="hidden" name="remember" defaultValue="true" />
               <div className="rounded-md shadow-sm -space-y-px">
                  <div className="pt-4">
                     <label htmlFor="email-address" className="">
                     Email address
                     </label>
                     <input
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
                     id="password"
                     name="password"
                     type="password"
                     autoComplete="current-password"
                     required
                     className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                     placeholder="Password"
                     />
                  </div>
               </div>

               <div className="flex items-center justify-between">
                  <div className="text-sm">
                     <Link className="font-medium text-indigo-600 hover:text-indigo-500" to={'/forgot-password'}>Forgot your password?</Link>
                  </div>
               </div>

               <div>
                  <button
                     type="submit"
                     className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                     <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                     {/* <LockClosedIcon
                        className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                        aria-hidden="true"
                     /> */}
                     </span>
                     log in
                  </button>
                  <div className="text-center py-4">
                  <p>New to Ema-john? <Link className="text-indigo-700" to={'/sign-in'}>Create New Account</Link></p>
                  </div>
               </div>
               </form>
            </div>
         </div>
         </div>
      </div>
   );
   };

   export default Login;
