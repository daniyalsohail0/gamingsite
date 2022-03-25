import React from 'react'
import { SiEthereum, SiXbox, SiMicrosoft, SiSteam, SiPlaystation } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

const SignIn = () => {
  return (
    <div className='flex justify-center items-center min-h-screen w-full bg-black'>
        <div className='w-3/5 h-3/4 flex md:flex-row flex-col justify-center items-center bg-gradient-to-r from-indigo-900 to-indigo-700 rounded m-4 p-4'>
            <div className='w-3/4 md:w-1/2 h-auto m-2'>
                <h1 className='text-white text-6xl font-extrabold text-center'>
                    FUTURE IS HERE.
                </h1>
            </div>
            <div>
            <div className="flex flex-col items-center justify-center w-full mf:mt-0 mt-10 m-2">
                <div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card .white-glassmorphism ">
                    <div className="flex justify-between flex-col w-full h-full">
                    <div className="flex justify-between items-start">
                        <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                        <SiEthereum fontSize={21} color="#fff" />
                        </div>
                        <BsInfoCircle fontSize={17} color="#fff" />
                    </div>
                    <div>
                        <p className="text-white font-semibold text-lg mt-1">
                        Sign In
                        </p>
                    </div>
                    </div>
                </div>
                <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
                    <input placeholder="User Name" name="userName" type="text" className='bg-indigo-400 rounded m-2 p-2 w-full' />
                    <input placeholder="Password" name="password" type="text" className='bg-indigo-400 rounded m-2 p-2 w-full' />

                    <div className="h-[1px] w-full bg-gray-400 my-2" />

                    <button
                        type="button"
                        className="text-white w-full mt-2 p-2 bg-[#270082] hover:bg-[#1A1A40] rounded-xl cursor-pointer"
                        >
                        Login
                    </button>

                    <div className='m-2 p-2 flex flex-col justify-center items-center'>
                        <div>
                            <h1 className='text-white'>Log In Using</h1>
                        </div>
                        <div className='grid grid-cols-4 gap-2 p-2 hover:cursor-pointer'>
                            <SiXbox />
                            <SiMicrosoft /> 
                            <SiSteam />
                            <SiPlaystation />
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default SignIn