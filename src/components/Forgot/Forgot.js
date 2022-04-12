import React from "react";
import './Forgot.css'

const Forgot = () => {
return (
   <div>
      <div className="pt-16">
      <div className="">
         <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div id="formContent" className="max-w-md w-full space-y-8 bg-slate-200 p-5 rounded shadow-xl">
            <div>
               <h2 className="mt-6 text-center text-2xl font-extrabold text-gray-900 font-serif">
                  Recover Your Password
               </h2>
            </div>
            <form className="space-y-6" action="#" method="POST">
               <input type="hidden" name="remember" defaultValue="true" />
               <div className="rounded-md shadow-sm -space-y-px">
                  <div className="">
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
                  
               </div>
               <button
                     type="submit"
                     className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                     <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                     </span>
                     Click Here
                  </button>
            </form>
            </div>
         </div>
      </div>
      </div>
   </div>
);
};

export default Forgot;
