import React from 'react';
import building from "../../../assets/building.gif";

const BuildingPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 text-center">
      <img className="w-40 md:w-52 lg:w-64" src={building} alt="Building" />
      <h1 className="text-2xl md:text-4xl font-bold mb-4">Coming Soon!</h1>
      <p className="text-lg md:text-2xl text-gray-600 mb-6 max-w-lg">
        Page is under construction and will be available in the next update. Stay tuned!
      </p>
      <a href="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded text-lg">
        Go Home
      </a>
    </div>
  );
};

export default BuildingPage;