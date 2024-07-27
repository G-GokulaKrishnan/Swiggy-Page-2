import React from 'react';

const ChocolateWaffleCardLoader = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-4 md:space-y-0 md:space-x-4 p-4 w-full h-full">
      <div className="flex-1 pr-4">
        <div className="h-5 w-16 shimmer rounded-md mb-2"></div>
        <div className="h-6 w-3/4 shimmer rounded-md mb-2"></div>
        <div className="flex items-center space-x-1 mb-2">
          <div className="h-6 w-12 shimmer rounded-md"></div>
          <div className="flex items-center space-x-1">
            <div className="h-3 w-12 shimmer rounded-md"></div>
          </div>
        </div>
        <div className="flex items-center space-x-1 pt-2 pb-2">
          <div className="h-3 w-5 shimmer rounded-md"></div>
          <div className="h-3 w-8 shimmer rounded-md"></div>
        </div>
        <div className="h-6 w-full shimmer rounded-md mb-2"></div>
      </div>
      <div className="relative">
        <div className="h-40 w-40 shimmer rounded-3xl flex justify-center items-center"></div>
        <div className="absolute bottom-[-1rem] left-[20%] transform -translate-x-1/2 bg-white h-10 w-24 shimmer rounded-3xl"></div>
      </div>
    </div>
  );
};

export default ChocolateWaffleCardLoader;