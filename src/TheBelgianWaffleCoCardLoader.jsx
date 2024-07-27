import React from 'react';

const TheBelgianWaffleCoCardLoader = () => {
  return (
    <>
   <div className="2xl:container">
      <div className="w-[90%] md:w-3/4 lg:w-[50%] mx-auto pb-4 rounded-3xl shadow-inner transform transition-transform duration-300 ease-in-out hover:scale-105">
        <div className="h-8 w-1/2 shimmer rounded-md mb-4"></div>

        <div className="mx-4 rounded-3xl shadow-outer">
          <div className="flex flex-col items-center md:flex-row py-4 space-y-2 md:space-y-0 md:space-x-1 bg-[#FFEEE5] rounded-t-3xl p-2">
            <div className="h-5 w-5 shimmer rounded-full ml-3"></div>
            <div className="h-4 w-3/4 shimmer rounded-md"></div>
          </div>

          <div className="flex items-center space-x-1 ml-3 mt-2">
            <div className="flex space-x-2 items-center">
              <div className="h-5 w-5 shimmer rounded-full"></div>
              <div className="h-4 w-3/4 shimmer rounded-md"></div>
            </div>

            <div className="flex items-center space-x-1">
              <div className="h-3 w-3 shimmer rounded-full"></div>
              <div className="h-4 w-1/2 shimmer rounded-md"></div>
            </div>
          </div>

          <div className="flex space-x-1 mb-3 ml-3 font-bold text-[#FFA276]">
            <div className="h-4 w-1/4 shimmer rounded-md"></div>
            <div className="h-4 w-1/4 shimmer rounded-md"></div>
          </div>

          <div className="flex ml-3 pb-4">
            <div className="h-10 w-10 shimmer rounded-full mt-[6px]"></div>
            <div className="flex flex-col ml-2">
              <div className="h-4 w-1/2 shimmer rounded-md mb-[6px]"></div>
              <div className="h-4 w-1/3 shimmer rounded-md"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
    
  );
};

export default TheBelgianWaffleCoCardLoader;
