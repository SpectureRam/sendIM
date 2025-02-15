import React from 'react';
import building from "../../../assets/building.gif"
const BuildingPage = () => {
  return (
    <div className="h-screen flex justify-center items-center flex-col">
        <img width={200} src = {building}/>
      <h1 className="text-4xl font-bold mb-4">Coming Soon!</h1>
      <p className="text-2xl text-gray-600 mb-8">Page is building and will be available in the next update. Stay tuned!</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"><a href='/'>Go Home</a></button>
    </div>
  );
};

export default BuildingPage;