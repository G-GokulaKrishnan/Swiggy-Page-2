import React from 'react';

const DealsForYouLoader = () => {
  return (
    <>
    <div className="flex items-center p-2 pr-10 md:pr-20 lg:pr-28 bg-white rounded-3xl space-x-2 shimmer">
      <div className="h-12 w-12 shimmer rounded-full ml-2"></div>
      <div className="flex flex-col space-y-1">
        <div className="h-4 w-32 shimmer rounded-md"></div>
        <div className="h-4 w-24 shimmer rounded-md"></div>
      </div>
    </div>
  );
    </>
    
};

export default DealsForYouLoader;
