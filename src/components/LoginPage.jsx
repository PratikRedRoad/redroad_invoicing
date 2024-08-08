import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../store/authSlice';
import './LoginPage.css'


function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(login({ email, password }));
  };

  return (
    <>
    <div className="flex min-h-screen bg-gray-100">
       <div className="first_half hidden lg:flex lg:w-2/3 justify-center items-center p-10">
         <div className="max-w-md">
           <img src="./doc.png" alt="Healthcare illustration" className="w-full h-100" />
         </div>
       </div>
       <div className="flex flex-col justify-center bg-white items-center w-full lg:w-2/3 p-8">
         <div className="w-full max-w-md">
           <h2 className="text-xl font-bold text-red-800 mb-8">Login to REDROAD</h2>
           <form onSubmit={handleSubmit} className="space-y-6">
             <div>
               <input
                 type="email"
                 placeholder="Email"
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
               />
             </div>
             <div>
               <input
                 type="password"
                 placeholder="Password"
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}
                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
               />
             </div>
             <div className="flex justify-end">
               <a href="#" className="text-sm text-red-600 hover:underline">Forget Password?</a>
             </div>
             <button
               type="submit"
               className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
             >
               Login
             </button>
           </form>
         </div>
       </div>
    </div>
    </>
  )
}

export default LoginPage;