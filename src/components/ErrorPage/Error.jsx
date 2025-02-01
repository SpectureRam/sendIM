import React from 'react'
import { Link } from 'react-router-dom';
import error_img from "../../assets/error.svg"
const Error = () => {
  return (
    <div className="grid h-screen place-content-center bg-white px-4">
    <div className="text-center">
    <img src={error_img} width={430}/>

    <h1 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">Uh-oh!</h1>

    <p className="mt-4 text-gray-500">We can't find that page.</p>
    <p className="mt-4 p-2 text-black bg-slate-200  rounded-lg inline-block hover:text-white">
    <Link to={"/home"} className="block">Go back to Home</Link>
    </p>
    </div>
    </div>
  )
}

export default Error;