import React, { useState, useEffect  } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons for menu toggle
import { motion } from 'framer-motion';
import ChocolateWaffleCardLoader from "../src/Shimmer Loader/Shimmer"
import TheBelgianWaffleCoCardLoader from "../src/TheBelgianWaffleCoCardLoader"


const Header = () => {
  const [showMenu, setShowMenu] = useState(false); // State to manage menu visibility

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className="2xl:container">
        <div className="w-[90%] mx-auto grid sm:grid-cols-1 lg:grid-cols-2 shadow-md font-bold">
          <div className="flex items-center">
            <img
              src="https://ik.imagekit.io/Gokul/FULL%20STACK/Assets%20/Swiggy%20Logo.png?updatedAt=1710912670720"
              alt="Swiggy Logo"
              className="ml-20 h-10 lg:h-20"
            />
          </div>

          {/* Hamburger Menu Icon (only visible on small screens) */}
          <div className="flex justify-end items-center sm:hidden">
            {showMenu ? (
              <FaTimes className="h-6 mr-4 cursor-pointer" onClick={toggleMenu} />
            ) : (
              <FaBars className="h-6 mr-4 cursor-pointer" onClick={toggleMenu} />
            )}
          </div>

          {/* Menu Items (hidden on small screens) */}
          <ul className={`sm:flex ${showMenu ? 'flex' : 'hidden'} flex-col justify-between sm:flex-row  mt-5`}>
            <li className="flex space-x-1 items-center mb-2">
              <img
                src="https://ik.imagekit.io/Gokul/FULL%20STACK/The%20Belgian%20Waffle%20Co./briefcase-outline.png"
                alt="Bag"
                className="h-3 md:h-4 lg:h-5"
              />
              <span className="text-xs  lg:text-base">Swiggy Corporate</span>
            </li>
            <li className="flex space-x-1 items-center mb-2">
              <img
                src="https://ik.imagekit.io/Gokul/FULL%20STACK/The%20Belgian%20Waffle%20Co./search.png"
                alt="Search"
                className="h-3 md:h-4 lg:h-5"
              />
              <span className="text-xs  lg:text-base">Search</span>
            </li>
            <li className="flex space-x-1 items-center mb-2">
              <img
                src="https://ik.imagekit.io/Gokul/FULL%20STACK/The%20Belgian%20Waffle%20Co./sale.png?updatedAt=1720384289860"
                alt="Offers"
                className="h-3 md:h-4 lg:h-5"
              />
              <span className="text-xs  lg:text-base">Offers</span>
              <p className="text-[#FFAA09] text-sm mb:1  lg:text-lg lg: mb-3">NEW</p>
            </li>
            <li className="flex space-x-1 items-center mb-2">
              <img
                src="https://ik.imagekit.io/Gokul/FULL%20STACK/The%20Belgian%20Waffle%20Co./help.png"
                alt="Help"
                className="h-3 md:h-4 lg:h-5"
              />
              <span className="text-xs  lg:text-base">Help</span>
            </li>
            <li className="flex space-x-1 items-center mb-2">
              <img
                src="https://ik.imagekit.io/Gokul/FULL%20STACK/The%20Belgian%20Waffle%20Co./sign%20in.png"
                alt="Sign In"
                className="h-3 md:h-4 lg:h-5"
              />
              <span className="text-xs  lg:text-base">Sign In</span>
            </li>
            <li className="flex space-x-1 items-center mb-2">
              <img
                src="https://ik.imagekit.io/Gokul/FULL%20STACK/The%20Belgian%20Waffle%20Co./shopping-bag.png"
                alt="Cart"
                className="h-3 md:h-4 lg:h-5"
              />
              <span className="text-xs  lg:text-base">Cart</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};


// const Header = () => {
//   return (
//     <>
//       <div className="2xl:container">
//         <div className="w-[90%]  mx-auto grid sm:grid-cols-1 lg:grid-cols-2 shadow-md font-bold">
//           <div>
//             <img
//               src="https://ik.imagekit.io/Gokul/FULL%20STACK/Assets%20/Swiggy%20Logo.png?updatedAt=1710912670720"
//               alt="Swiggy Logo"
//               className="ml-20 h-20"
//             />
//           </div>

//           <ul className=" flex justify-between items-center list-none">
//             <div className="flex space-x-1 items-center">
//               <img
//                 src="https://ik.imagekit.io/Gokul/FULL%20STACK/The%20Belgian%20Waffle%20Co./briefcase-outline.png"
//                 alt="Bag"
//                 className="h-5"
//               />
//               <li>Swiggy Corporate</li>
//             </div>

//             <div className="flex space-x-1 items-center">
//               <img
//                 src="https://ik.imagekit.io/Gokul/FULL%20STACK/The%20Belgian%20Waffle%20Co./search.png"
//                 alt="Search"
//                 className="h-5"
//               />
//               <li>Search</li>
//             </div>

//             <div className="flex space-x-1 items-center">
//               <img
//                 src="https://ik.imagekit.io/Gokul/FULL%20STACK/The%20Belgian%20Waffle%20Co./sale.png?updatedAt=1720384289860"
//                 alt="Offers"
//                 className="h-5"
//               />
//               <li>Offers</li>
//               <div className=" mb-2">
//                 <img
//                   src="https://ik.imagekit.io/Gokul/FULL%20STACK/The%20Belgian%20Waffle%20Co./new.png"
//                   alt="New"
//                   className="h-8"
//                 />
//               </div>
//             </div>

//             <div className="flex space-x-1 items-center">
//               <img
//                 src="https://ik.imagekit.io/Gokul/FULL%20STACK/The%20Belgian%20Waffle%20Co./help.png"
//                 alt="Help"
//                 className="h-5"
//               />
//               <li>Help</li>
//             </div>

//             <div className="flex space-x-1 items-center">
//               <img
//                 src="https://ik.imagekit.io/Gokul/FULL%20STACK/The%20Belgian%20Waffle%20Co./sign%20in.png"
//                 alt="Sign In"
//                 className="h-5"
//               />

//               <li>Sign In</li>
//             </div>

//             <div className="flex space-x-1 items-center">
//               <img
//                 src="https://ik.imagekit.io/Gokul/FULL%20STACK/The%20Belgian%20Waffle%20Co./shopping-bag.png"
//                 alt="Cart"
//                 className="h-5"
//               />
//               <li>Cart</li>
//             </div>
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// };

// const TheBelgianWaffleCo= () => {
//   return (
//     <>
//       <div className="2xl:container">
//         <div className="w-[50%] mx-auto pb-4 rounded-3xl shadow-inner  "> {/* Card Outer Container  */}
//           <h1 className=" font-black mb-4">The Belgian Waffle Co.</h1>

//           <div className=" mx-4  rounded-3xl shadow-outer">{/* Card Inner Padding container  */}

//               <div className="flex py-4 space-x-1 bg-[#FFEEE5] rounded-t-3xl ">  {/* Outlet Not open message container  */}
//               <img src="https://ik.imagekit.io/Gokul/FULL%20STACK/The%20Belgian%20Waffle%20Co./info%20black.png" alt="info" className="h-5 ml-3" />
//               <p className="text-[#FF6720] font-bold">Uh-oh! Outlet is not accepting orders at the moment. They should be back by 12:00 PM</p>
//               </div>
            

//             <div className="flex space-x-1 ml-3 mt-2"> {/*Container wrapping ratings and rate */}

//               <div className="flex space-x-2 items-center"> {/* Ratings Container */}
//                 <img
//                   src="https://ik.imagekit.io/Gokul/FULL%20STACK/The%20Belgian%20Waffle%20Co./star.png"
//                   alt="Star"
//                   className="h-5"
//                 />
//                 <p className="font-bold">4.7 (1K+ ratings)</p>
//               </div>

//               <div className="flex items-center space-x-1"> {/* Rate Container*/}
//                 <img
//                   src="https://ik.imagekit.io/Gokul/FULL%20STACK/The%20Belgian%20Waffle%20Co./big%20dot.png"
//                   alt="Dot"
//                   className="h-3"
//                 />
//                 <p className="font-bold" >&#x20B9;200 for two</p>
//               </div>
//             </div>

//             <div className="flex space-x-1 mb-3 ml-3 font-bold text-[#FFA276]">
//             <p className="underline">Waffle,</p>
//             <p className="underline">Desserts</p>
//             </div>

//             <div className="flex ml-3 pb-4">
//             <img
//               src="https://ik.imagekit.io/Gokul/FULL%20STACK/The%20Belgian%20Waffle%20Co./square-and-circle-union-with-a-vertical-line-simple-graphic.png"
//               alt="Line"
//               className=" h-10 mt-[6px]"
//             />

//             <div className="flex flex-col ">
//             <p className="mb-[6px] text-[#676A6D]" >Outlet Gandhi Nagar</p>
//             <p className="font-bold">Closed & not delivering</p>

//             </div>

//             </div>
            
            
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

const TheBelgianWaffleCo = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay to show the loading skeleton
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds delay

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="space-y-4">
        <TheBelgianWaffleCoCardLoader />

      </div>
    );
  }
  return (
    <>
      <div className="2xl:container">
  <div className="w-[90%] md:w-3/4 lg:w-[50%] mx-auto pb-4 rounded-3xl shadow-inner transform transition-transform duration-300 ease-in-out hover:scale-105">
    <h1 className="text-center lg:text-left text-lg md:text-xl lg:text-2xl xl:text-3xl font-black mb-4">The Belgian Waffle Co.</h1>

    <div className="mx-4 rounded-3xl shadow-outer">
      <div className="flex flex-col items-center md:flex-row py-4 space-y-2 md:space-y-0 md:space-x-1 bg-[#FFEEE5] rounded-t-3xl p-2">
        <img
          src="https://ik.imagekit.io/Gokul/FULL%20STACK/The%20Belgian%20Waffle%20Co./info%20black.png"
          alt="info"
          className="h-5 w-5 md:w-5 md:h-5 lg:w-5 lg:h-5 object-contain ml-3"
        />
        <p className="text-[#FF6720] text-sm md:text-base lg:text-lg font-bold">
          Uh-oh! Outlet is not accepting orders at the moment. They should be back by 12:00 PM
        </p>
      </div>

      <div className="flex item-center space-x-1 ml-3 mt-2">
        <div className="flex space-x-2 items-center">
          <img
            src="https://ik.imagekit.io/Gokul/FULL%20STACK/The%20Belgian%20Waffle%20Co./star.png"
            alt="Star"
            className="h-5"
          />
          <p className="font-bold text-sm md:text-base lg:text-lg">4.7 (1K+ ratings)</p>
        </div>

        <div className="flex items-center space-x-1  ">
          <img
            src="https://ik.imagekit.io/Gokul/FULL%20STACK/The%20Belgian%20Waffle%20Co./big%20dot.png"
            alt="Dot"
            className="h-3"
          />
          <p className="font-bold text-sm md:text-base lg:text-lg">&#x20B9;200 for two</p>
        </div>
      </div>

      <div className="flex space-x-1 mb-3 ml-3 font-bold text-[#FFA276] text-sm md:text-base lg:text-lg">
        <p className="underline">Waffle,</p>
        <p className="underline">Desserts</p>
      </div>

      <div className="flex ml-3 pb-4">
        <img
          src="https://ik.imagekit.io/Gokul/FULL%20STACK/The%20Belgian%20Waffle%20Co./square-and-circle-union-with-a-vertical-line-simple-graphic.png"
          alt="Line"
          className="h-10 mt-[6px]"
        />
        <div className="flex flex-col ml-2">
          <p className="mb-[6px] text-[#676A6D] text-sm md:text-base lg:text-lg">Outlet Gandhi Nagar</p>
          <p className="font-bold text-sm md:text-base lg:text-lg">Closed & not delivering</p>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  );
};



const DealsForYou = () => {
  
  return (
    <>
      <div className="2xl:container">
        <div className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] mx-auto mt-8">
          <p className="font-bold text-lg md:text-xl lg:text-2xl">Deals For You</p>

          <Swiper
            slidesPerView={2}
            slidesPerGroupSkip={1}
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
            breakpoints={{

              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },


              640: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1280: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
            }}
            
            
          >
            <SwiperSlide>
              <div className="flex items-center p-2 pr-10 md:pr-20 lg:pr-28  bg-white rounded-3xl space-x-2">
                <img
                  src="https://ik.imagekit.io/Gokul/FULL%20STACK/The%20Belgian%20Waffle%20Co./generic"
                  alt="Deals Image"
                  className="h-8 md:h-10 lg:h-12 ml-2"
                />

                <div className="flex flex-col">
                
                  <h4 className="text-sm md:text-base lg:text-lg font-black">20% Off Upto ₹50</h4>
                  <p className="text-left text-[#8D8F91] font-extrabold text-xs md:text-sm lg:text-lg ">USE TRYNEW</p>
                </div>
              </div>
              </SwiperSlide>

              <SwiperSlide>
              <div className="flex items-center p-2 pr-10 md:pr-20 lg:pr-28 bg-white rounded-3xl space-x-2">
                <img
                  src="https://ik.imagekit.io/Gokul/FULL%20STACK/The%20Belgian%20Waffle%20Co./Kotak.png"
                  alt="Deals Image"
                  className="h-8 md:h-10 lg:h-12 ml-2"
                />

                <div className="flex flex-col">
                  
                  <h4 className="text-sm md:text-base lg:text-lg font-black">15% Off Upto ₹125</h4>
                  <p className="text-left text-[#8D8F91] font-extrabold text-xs md:text-sm lg:text-lg">USE KOTAK125</p>
                </div>
              </div>
              </SwiperSlide>
              
              <SwiperSlide>
              <div className="flex items-center p-2 pr-10 md:pr-20 lg:pr-28 bg-white rounded-3xl space-x-2">
                <img
                  src="https://ik.imagekit.io/Gokul/FULL%20STACK/The%20Belgian%20Waffle%20Co./BOB.png"
                  alt="Deals Image"
                  className="h-8 md:h-10 lg:h-12 ml-2"
                />

                <div className="flex flex-col">
                  
                  <h4 className="text-sm md:text-base lg:text-lg font-black">20% Off Upto ₹125</h4>
                  <p className="text-left text-[#8D8F91] font-extrabold text-xs md:text-sm lg:text-lg">USE BOBDC</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

// const DealsForYou = () => {
//   return (
//     <>
//       <div className="2xl:container">
//         <div className="w-full sm:w-[75%] md:w-[66.67%] lg:w-[50%] xl:w-[33.34%] mx-auto mt-8">
//           <p className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-start">Deals For You</p>

//           <Swiper
//             slidesPerView={1}
//             spaceBetween={10}
//             breakpoints={{
//               640: {
//                 slidesPerView: 2,
//                 spaceBetween: 20,
//               },
//               768: {
//                 slidesPerView: 1,
//                 spaceBetween: 30,
//               },
//               1024: {
//                 slidesPerView: 1,
//                 spaceBetween: 80,
//               },
//             }}
//             slidesPerGroupSkip={1}
//             cssMode={true}
//             navigation={true}
//             pagination={{ clickable: true }}
//             mousewheel={true}
//             keyboard={true}
//             modules={[Navigation, Pagination, Mousewheel, Keyboard]}
//             className="mySwiper"
//           >
//             <SwiperSlide>
//               <button className="flex items-center p-2 pr-6 sm:pr-16 md:pr-28 bg-white rounded-3xl space-x-2">
//                 <img
//                   src="https://ik.imagekit.io/Gokul/FULL%20STACK/The%20Belgian%20Waffle%20Co./generic"
//                   alt="Deals Image"
//                   className="h-10 sm:h-12 ml-2"
//                 />

//                 <div className="flex flex-col">
//                   <h4 className="text-base sm:text-lg md:text-xl font-black">20% Off Upto ₹50</h4>
//                   <p className="text-left text-[#8D8F91] font-extrabold text-sm sm:text-lg bg-slate-400">USE TRYNEW</p>
//                 </div>
//               </button>
//             </SwiperSlide>

//             <SwiperSlide>
//               <button className="flex items-center p-2 pr-6 sm:pr-16 md:pr-28 bg-white rounded-3xl space-x-2">
//                 <img
//                   src="https://ik.imagekit.io/Gokul/FULL%20STACK/The%20Belgian%20Waffle%20Co./Kotak.png"
//                   alt="Deals Image"
//                   className="h-10 sm:h-12 ml-2"
//                 />

//                 <div className="flex flex-col">
//                   <h4 className="text-base sm:text-lg md:text-xl font-black">15% Off Upto ₹125</h4>
//                   <p className="text-left text-sm sm:text-lg">USE KOTAK125</p>
//                 </div>
//               </button>
//             </SwiperSlide>

//             <SwiperSlide>
//               <button className="flex items-center p-2 pr-6 sm:pr-16 md:pr-28 bg-white rounded-3xl space-x-2">
//                 <img
//                   src="https://ik.imagekit.io/Gokul/FULL%20STACK/The%20Belgian%20Waffle%20Co./BOB.png"
//                   alt="Deals Image"
//                   className="h-10 sm:h-12 ml-2"
//                 />

//                 <div className="flex flex-col">
//                   <h4 className="text-base sm:text-lg md:text-xl font-black">20% Off Upto ₹125</h4>
//                   <p className="text-left text-sm sm:text-lg">USE BOBDC</p>
//                 </div>
//               </button>
//             </SwiperSlide>
//           </Swiper>
//         </div>
//       </div>
//     </>
//   );
// };

const Menu = () => {
  return (
    <>
      <div className="2xl:container mt-16">
        <div className="w-[90%] md:w-[70%] lg:w-[50%] mx-auto">
          <p className="text-center mb-5">MENU</p>

          <div class="relative">
            <input
              type="text"
              placeholder="Search for dishes"
              class="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 bg-[#F2F2F3] border-none"
            />
            <img
              src="https://ik.imagekit.io/Gokul/FULL%20STACK/The%20Belgian%20Waffle%20Co./search.png?updatedAt=1720384875694"
              alt="Search Icon"
              class="absolute left-3 top-[30%] transform -translate-y-1/2 w-5 h-5"
            />
          </div>


          <button className="flex space-x-1 rounded-lg border-none mt-6 items-center p-1 ">
            <img src="https://ik.imagekit.io/Gokul/FULL%20STACK/The%20Belgian%20Waffle%20Co./vegan.png" alt="Veg" className="h-3 lg:h-5" />
            <p className="lg:text-xl">Pure Veg</p>
          </button>

          <hr className="my-4 border-[#8D8F91]" />
        </div>
      </div>
    </>
  );
};


// const ChocolateWaffleCard = (prop) => {
//   const {title, price, rating, img, description} = prop;
//   return (
//     <>
      

//       <div className="flex flex-col md:flex- justify-between">
//       <div className="flex-1 pr-4">
//       <img src="https://ik.imagekit.io/Gokul/FULL%20STACK/The%20Belgian%20Waffle%20Co./Veg.png" alt="Veg" className="h-5" />
//         <h2 className="text-lg md:text-xl">{title}</h2>

       
            
//         <div className="flex items-center space-x-1">
//           <h3 className="text-base md:text-lg">&#8377;{price}</h3>

//           <div className="flex items-center space-x-1">
//             <img src="https://ik.imagekit.io/Gokul/FULL%20STACK/The%20Belgian%20Waffle%20Co./price-tag.png" alt="Price Tag" className="h-3" />
//             <p className="text-xs md:text-sm font-extrabold text-green-600">20% OFF USE TRYNEW</p>

//           </div>
//         </div>

//         <div className="flex items-center space-x-1 pt-2 pb-2">
//           <img src="https://ik.imagekit.io/Gokul/FULL%20STACK/The%20Belgian%20Waffle%20Co./favorite.png" alt="star" className="h-3" />
//           <p className="font-bold">{rating}</p>
//         </div>

//         <p className="font-bold text-[#676A6D] text-sm md:text-lg">{description}</p>

//       </div>

//       {/* <div className="bg-[url{img}]">
//         <img src={img} alt="{title}}" className="h-40 rounded-3xl object-cover" /> 
        
        
//       </div> */}

//       {/* <div
//           className="h-40  w-full md:w-40  bg-no-repeat bg-contain bg-center rounded-3xl"
//           style={{ backgroundImage: `url(${img})`}}
//         ></div> */}

// <div
//           className="h-40 w-40 rounded-3xl bg-cover bg-center"
//           style={{ backgroundImage: `url(${img})`}}
//         ></div>

//       </div>

//       <hr className="my-4 border-[#F2F2F3]" />

//     </>
//   );
  
// };

const ChocolateWaffleCard = (prop) => {
  const { title, price, rating, img, description } = prop;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay to show the loading skeleton
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds delay

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="space-y-4">
        <ChocolateWaffleCardLoader />

      </div>
    );
  }
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-4 md:space-y-0 md:space-x-4">
        <div className="flex-1 pr-4">
          <img src="https://ik.imagekit.io/Gokul/FULL%20STACK/The%20Belgian%20Waffle%20Co./Veg.png" alt="Veg" className="h-5" />
          <h2 className="text-lg md:text-xl">{title}</h2>
          
          <div className="flex items-center space-x-1">
            <h3 className="text-base md:text-lg">&#8377;{price}</h3>
            
            <div className="flex items-center space-x-1">
              <img src="https://ik.imagekit.io/Gokul/FULL%20STACK/The%20Belgian%20Waffle%20Co./price-tag.png" alt="Price Tag" className="h-3" />
              <p className="text-xs md:text-sm font-extrabold text-green-600">20% OFF USE TRYNEW</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-1 pt-2 pb-2">
            <img src="https://ik.imagekit.io/Gokul/FULL%20STACK/The%20Belgian%20Waffle%20Co./favorite.png" alt="star" className="h-3" />
            <p className="font-bold">{rating}</p>
          </div>
          
          <p className="font-bold text-[#676A6D] text-sm md:text-lg">{description}</p>
        </div>

        {/* <div
          className="h-40 w-full md:w-40 bg-cover bg-center rounded-3xl flex flex-col justify-end"
          style={{ backgroundImage: `url(${img})` }}
          
        > 
        <div className="text-center">
          <button className="font-extrabold text-xl text-green-600 py-2 px-8 border-none bg-transparent">ADD</button>
          
          </div>          
        </div> */}

<div className="relative">
          <div
            className="h-40 w-40 bg-no-repeat bg-contain bg-center rounded-3xl"
            style={{ backgroundImage: `url(${img})` }}
          ></div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="absolute bottom-[-1rem] left-[20%] transform -translate-x-1/2 bg-white text-green-600 font-bold py-2 px-10 rounded-3xl shadow-lg border-none mb-2"
          >
            ADD
          </motion.button>
        </div>



      </div>

      <hr className="my-4 border-[#F2F2F3]" />
    </>
  );
};



const Waffle = () => {
  let [ChocolateWaffleDataSet] = useState([
    {
      title: "Naked Nutella Waffle",
      price: "182.38",
      rating: "4.6 (244)",
      id: 1,
      image_url:
        "https://ik.imagekit.io/Gokul/FULL%20STACK/The%20Belgian%20Waffle%20Co./Naked%20Nutella%20Waffle.jpg?updatedAt=1720364757806",
      description:
        "Classic Crispy Waffle + Premium European Chocolate Hazelnut Spread (Add Banana If You Like). A Universal Favourite!",
    },

    {
      title: "Belgian Chocolate Milk Waffle",
      price: "155.71",
      rating: "4.6 (302)",
      id: 2,
      image_url:
        "https://ik.imagekit.io/Gokul/FULL%20STACK/The%20Belgian%20Waffle%20Co./Belgian%20Chocolate%20Milk%20Waffle.jpg?updatedAt=1720364757723",
      description:
        "Classic Crispy Waffle + Melted Belgian Milk Chocolate. Simplicity At Its Best!",
    },

    {
      title: "Kitkat Waffle",
      price: "165.24",
      rating: "4.6 (213)",
      id: 3,
      image_url:
        "https://ik.imagekit.io/Gokul/FULL%20STACK/The%20Belgian%20Waffle%20Co./Kitkat%20Waffle.jpg?updatedAt=1720364757702",
      description:
        "Classic Crispy Waffle + Melted Belgian White Chocolate And KitKat Bits. For KitKat Lovers!",
    },

    {
      title: "Belgian Chocolate Dark Waffle",
      price: "155.71",
      rating: "4.6 (142)",
      id: 4,
      image_url:
        "https://ik.imagekit.io/Gokul/FULL%20STACK/The%20Belgian%20Waffle%20Co./Belgian%20Chocolate%20Dark%20Waffle.jpg?updatedAt=1720364757589",
      description:
        "Classic Crispy Waffle + Melted Belgian Dark Chocolate. Darker Simplicity!",
    },

    {
      title: "Butterscotch Crunch Waffle",
      price: "135.24",
      rating: "4.7(187)",
      id: 5,
      image_url:
        "https://ik.imagekit.io/Gokul/FULL%20STACK/The%20Belgian%20Waffle%20Co./Butterscotch%20Crunch%20Waffle.jpg?updatedAt=1720364757971",
      description:
        "Classic Crispy Waffle + Crunchy Butterscotch Fudge. Go On Indulge!",
    },

    {
      title: "Snickers Waffle",
      price: "182.38",
      rating: "5.0(31)",
      id: 6,
      image_url:
        "https://ik.imagekit.io/Gokul/FULL%20STACK/The%20Belgian%20Waffle%20Co./Snickers%20Waffle.jpg?updatedAt=1720364757700",
      description:
        "Classic Crispy Waffle + Roasted Peanut Butter with caramel sauce & melted Belgian Milk Chocolate, topped with real Snickers. A comforting classic reimagined.",
    },

    {
      title: "Coffee Mocha Waffle",
      price: "145.71",
      rating: "4.5(105)",
      id: 7,
      image_url:
        "https://ik.imagekit.io/Gokul/FULL%20STACK/The%20Belgian%20Waffle%20Co./Coffee%20Mocha%20Waffle",
      description:
        "Classic Crispy Waffle + Melted Chocolate Infused With Coffee Crumbs. For Coffee Lovers!",
    },
  ]);

  let [DoubleChocolateWaffleDataSet] = useState([

    {
      title: "Triple Chocolate Waffle",
      price: "175.71",
      rating: "4.7(484)",
      id: 1,
      image_url:
      "https://ik.imagekit.io/Gokul/FULL%20STACK/The%20Belgian%20Waffle%20Co./Triple%20Chocolate%20Waffle",
      description: "Signature Dark Chocolate Waffle + 3 Layers Of Melted White Chocolate, Belgian Milk Chocolate And Belgian Dark Chocolate. The Most Indulgent Chocolate Waffle Ever!",
      },
      
      {
      title: "Almond Brownie Waffle",
      price: "182.38",
      rating: "4.6(117)",
      id: 2,
      image_url:
      "https://ik.imagekit.io/Gokul/FULL%20STACK/The%20Belgian%20Waffle%20Co./Almond%20Brownie%20Waffle",
      description: "The Best Of Two Worlds In A Single Bite - A Waffle And A Brownie. With Deliciously Rich Melted Chocolate and Almonds. Your Doorway To Heaven!",
      },
      {
      title: "Chocolate Overload Dark Waffle",
      price: "165.24",
      rating: "4.6(125)",
      id: 3,
      image_url:
      "https://ik.imagekit.io/Gokul/FULL%20STACK/The%20Belgian%20Waffle%20Co./Chocolate%20Overload%20Dark%20Waffle",
      description: "Signature Dark Chocolate Waffle + Melted Belgian Dark Chocolate. Double The Chocolate!",
      },
      
      {
      title: "Chocolate Overload Milk Waffle",
      price: "165.24",
      rating: "4.3(132)",
      id: 4,
      image_url:
      "https://ik.imagekit.io/Gokul/FULL%20STACK/The%20Belgian%20Waffle%20Co./Chocolate%20Overload%20Milk%20Waffle",
      description: "Signature Dark Chocolate Waffle + Melted Belgian Milk Chocolate. Double The Chocolate!",
      },
      
      {
      title: "Dark & White Fantasy Waffle",
      price: "165.24",
      rating: "4.5(68)",
      id: 5,
      image_url:
      "https://ik.imagekit.io/Gokul/FULL%20STACK/The%20Belgian%20Waffle%20Co./Dark%20&%20White%20Fantasy%20Waffle",
      description: "Signature Dark Chocolate Waffle + Fondant Of Melted Belgian White Chocolate. A Match Made In Heaven!",
      }


  ]);

  let [ClubVelvetWaffleDataSet] = useState([

    {
      title: "Kiki & Oreo Cream Waffle",
      price: "155.71",
      rating: "4.5(52)",
      id: 1,
      image_url:
      "https://ik.imagekit.io/Gokul/FULL%20STACK/The%20Belgian%20Waffle%20Co./Kiki%20&%20Oreo%20Cream%20Waffle",
      description: "Signature Black Velvet Waffle + Our Special Blue Filling with Cookie Crunchy Oreo Bits Filling. Kiki Do You Love Me?",
      },
      
      {
      title: "Red Velvet Waffle",
      price: "165.24",
      rating: "4.7(220)",
      id: 2,
      image_url:
      "https://ik.imagekit.io/Gokul/FULL%20STACK/The%20Belgian%20Waffle%20Co./Red%20Velvet%20Waffle",
      description: "Original Red Velvet Waffle + Creamy Cheesecake* filling And Melted White Chocolate. A True Original - Enhanced! *Cheesecake flavour filling, contains spray dried cheese powder",
      },
      
      {
      title: "Lotus Biscoff Waffle",
      price: "165.24",
      rating: "4.6(59)",
      id: 3,
      image_url:
      "https://ik.imagekit.io/Gokul/FULL%20STACK/The%20Belgian%20Waffle%20Co./Lotus%20Biscoff%20Waffle",
      description: "Signature Black Velvet Waffle + Fondant Of Melted White Chocolate Filled With Crunchy Lotus Biscoff Bits. An All Time Favorite!",
      },
      
      {
      title: "Berry Red Velvet Waffle",
      price: "165.24",
      rating: "4.6(11)",
      id: 4,
      image_url:
      "https://ik.imagekit.io/Gokul/FULL%20STACK/The%20Belgian%20Waffle%20Co./Berry%20Red%20Velvet%20Waffle",
      description: "Original Red Velvet Waffle +Strawberry Compote + Creamy Cheesecake* filling And Melted White Chocolate. A True Original - Enhanced! *Cheesecake flavour filling, contains spray dried cheese powder",
      }
  ]);

  let [CheesecakeFlavourWaffleDataSet] = useState([

    {
      title: "Biscoff Cheesecake* Waffle",
      price: "182.38",
      rating: "4.7(4)",
      id: 1,
      image_url:
      "https://ik.imagekit.io/Gokul/FULL%20STACK/The%20Belgian%20Waffle%20Co./Biscoff%20Cheesecake*%20Waffle",
      description: "Classic Crispy Waffle layered with creamy Cheesecake & Lotus Biscoff filling, topped with lotus biscoff crumbles.Its a Dreamy, Creamy & Caramelly affair! *Cheesecake flavour filling, contains spray dried cheese powder",
      },
      
      {
      title: "Mango Cheesecake* Waffle",
      price: "155.71",
      rating: "",
      id: 2,
      image_url:
      "https://ik.imagekit.io/Gokul/FULL%20STACK/The%20Belgian%20Waffle%20Co./Mango%20Cheesecake*%20Waffle",
      description: "Classic Crispy Waffle layered with creamy Cheesecake filling & fresh Mango Compote topped with lotus biscoff crumbles. Mangoliciously Cheesy!*Cheesecake flavour filling, contains spray dried cheese powder",
      },
      
      {
      title: "Strawberry Cheesecake* Waffle",
      price: "155.71",
      rating: "",
      id: 3,
      image_url:
      "https://ik.imagekit.io/Gokul/FULL%20STACK/The%20Belgian%20Waffle%20Co./Strawberry%20Cheesecake*%20Waffle",
      description: "Classic Crispy Waffle layered with creamy Cheesecake filling & fresh Strawberry Compote topped with lotus biscoff crumbles. Deliciously Tart! *Cheesecake flavour filling, contains spray dried cheese powder",
      },
      
      {
      title: "Blueberry Cheesecake* Waffle",
      price: "165.24",
      rating: "4.6(3)",
      id: 4,
      image_url:
      "https://ik.imagekit.io/Gokul/FULL%20STACK/The%20Belgian%20Waffle%20Co./Blueberry%20Cheesecake*%20Waffle",
      description: "Classic Crispy Waffle layered with creamy Cheesecake filling & fresh Blueberry Compote topped with lotus biscoff crumbles. Deliciously Tart! *Cheesecake flavour filling, contains spray dried cheese powder",
      }
  ]);

  let [ClassicWaffleDataSet] = useState([

    {
      title: "Almond Cocoa Butter Waffle",
      price: "175.71",
      rating: "4.5(87)",
      id: 1,
      image_url:
      "https://ik.imagekit.io/Gokul/FULL%20STACK/The%20Belgian%20Waffle%20Co./Almond%20Cocoa%20Butter%20Waffle",
      description: "Classic Crispy Waffle + Cocoa Butter Topped With Roasted Almonds. Nutty & Delicious!",
      },
      
      {
      title: "Maple Butter Waffle",
      price: "107.62",
      rating: "3.8(73)",
      id: 2,
      image_url:
      "https://ik.imagekit.io/Gokul/FULL%20STACK/The%20Belgian%20Waffle%20Co./Maple%20Butter%20Waffle",
      description: "Classic Crispy Waffle + Warm Melted Butter And Maple Syrup Drizzle. An American Classic!",
      },
      
      {
      title: "Honey Butter Waffle",
      price: "107.62",
      rating: "4.2(35)",
      id: 3,
      image_url:
      "https://ik.imagekit.io/Gokul/FULL%20STACK/The%20Belgian%20Waffle%20Co./Honey%20Butter%20Waffle",
      description: "Classic Crispy Waffle + Warm Melted Butter And Golden Honey Drizzle. An American Classic!",
      }

  ]);



  
  const [isOpenChocolateWaffle, setIsOpenChocolateWaffle] = useState(false);
  const [isOpenDoubleChocolateWaffle, setIsOpenDoubleChocolateWaffle] = useState(false);
  const [isOpenClubVelvetWaffle, setIsOpenClubVelvetWaffle] = useState(false);
  const [isOpenCheesecakeFlavourWaffle, setIsOpenCheesecakeFlavourWaffle] = useState(false);
  const [isOpenClassicWaffle, setIsOpenClassicWaffle] = useState(false);


  const toggleOpenChocolateWaffle = () => {
    setIsOpenChocolateWaffle(!isOpenChocolateWaffle);
  };

  const toggleOpenDoubleChocolateWaffle = () => {
    setIsOpenDoubleChocolateWaffle(!isOpenDoubleChocolateWaffle);
  };

  const toggleOpenClubVelvetWaffle = () => {
    setIsOpenClubVelvetWaffle(!isOpenClubVelvetWaffle);
  };

  const toggleOpenCheesecakeFlavourWaffle = () => {
    setIsOpenCheesecakeFlavourWaffle(!isOpenCheesecakeFlavourWaffle);
  };

  const toggleOpenClassicWaffle = () => {
    setIsOpenClassicWaffle(!isOpenClassicWaffle);
  };



  return (
    <>
      <div className="2xl:container">
        <div className="w-[90%] md:w-[70%] lg:w-[50%] mx-auto grid-cols-1">
          <p className="sm:text-lg md:text-xl lg:text-2xl font-extrabold">Waffle</p>

          <div className="flex justify-between items-center">
            <p className=" sm:text-base md:text-lg lg:text-xl font-bold">Chocolate Waffle (7)</p>
            <button onClick={toggleOpenChocolateWaffle}>
              {isOpenChocolateWaffle ? <FaChevronUp /> : <FaChevronDown />}
            </button>
          </div>
          <hr className="my-4 border-[#F2F2F3]" />
          {isOpenChocolateWaffle &&
            ChocolateWaffleDataSet.map((e) => {
              return (
                <ChocolateWaffleCard
                  key={e.id}
                  title={e.title}
                  price={e.price}
                  rating={e.rating}
                  img={e.image_url}
                  description={e.description}
                />
              );
            })}

          <div className="flex justify-between items-center">
            <p className=" sm:text-base md:text-lg lg:text-xl font-bold">Double Chocolate Waffle (5)</p>
            <button onClick={toggleOpenDoubleChocolateWaffle}>
              {isOpenDoubleChocolateWaffle ? (
                <FaChevronUp />
              ) : (
                <FaChevronDown />
              )}
            </button>
          </div>
          <hr className="my-4 border-[#F2F2F3]" />

          {isOpenDoubleChocolateWaffle &&
            DoubleChocolateWaffleDataSet.map((e) => {
              return (
                <ChocolateWaffleCard
                  key={e.id}
                  title={e.title}
                  price={e.price}
                  rating={e.rating}
                  img={e.image_url}
                  description={e.description}
                />
              );
            })}

          <div className="flex justify-between items-center">
            <p className=" sm:text-base md:text-lg lg:text-xl font-bold">Club Velvet Waffle (4)</p>
            <button onClick={toggleOpenClubVelvetWaffle}>
              {isOpenClubVelvetWaffle ? <FaChevronUp /> : <FaChevronDown />}
            </button>
          </div>
          <hr className="my-4 border-[#F2F2F3]" />

          {isOpenClubVelvetWaffle &&
            ClubVelvetWaffleDataSet.map((e) => {
              return (
                <ChocolateWaffleCard
                  key={e.id}
                  title={e.title}
                  price={e.price}
                  rating={e.rating}
                  img={e.image_url}
                  description={e.description}
                />
              );
            })}

          <div className="flex justify-between items-center">
            <p className=" sm:text-base md:text-lg lg:text-xl font-bold">Cheesecake* Flavour Waffle (4)</p>
            <button onClick={toggleOpenCheesecakeFlavourWaffle}>
              {isOpenCheesecakeFlavourWaffle ? (
                <FaChevronUp />
              ) : (
                <FaChevronDown />
              )}
            </button>
          </div>
          <hr className="my-4 border-[#F2F2F3]" />

          {isOpenCheesecakeFlavourWaffle &&
            CheesecakeFlavourWaffleDataSet.map((e) => {
              return (
                <ChocolateWaffleCard
                  key={e.id}
                  title={e.title}
                  price={e.price}
                  rating={e.rating}
                  img={e.image_url}
                  description={e.description}
                />
              );
            })}

          <div className="flex justify-between items-center mb-5">
            <p className=" sm:text-base md:text-lg lg:text-xl font-bold">Classic Waffle (3)</p>
            <button onClick={toggleOpenClassicWaffle}>
              {isOpenClassicWaffle ? <FaChevronUp /> : <FaChevronDown />}
            </button>
          </div>

          {isOpenClassicWaffle &&
            ClassicWaffleDataSet.map((e) => {
              return (
                <ChocolateWaffleCard
                  key={e.id}
                  title={e.title}
                  price={e.price}
                  rating={e.rating}
                  img={e.image_url}
                  description={e.description}
                />
              );
            })}

          <div className="bg-[#F2F2F3] mb-4 text-gray-50">-</div>
        </div>
      </div>
    </>
  );
};


const WaffleCakes = () =>{

  

  let [SingleLayerWaffleCakeDataSet] = useState([
    
    {
      title: "Death by Chocolate Waffle Cake (Single Layer)",
      price: "360.48",
      rating: "4.5(78)",
      id: 1,
      image_url:
      "https://ik.imagekit.io/Gokul/FULL%20STACK/Assets%20/Ar%20Lounge?updatedAt=1710682020374",
      description: "Signature dark chocolate single layer waffle cake layered with creamy White, Milk and Dark melted Belgian Chocolate. Triple the chocolate, triple the fun! (Sorry! Our special waffle cakes do not allow for any customization. We do not provide candles or cutlery with this order)",
      },
      
      {
      title: "Almond Brownie Waffle Cake (Single Layer)",
      price: "380.50",
      rating: "4.7(8)",
      id: 2,
      image_url:
      "https://ik.imagekit.io/Gokul/FULL%20STACK/Assets%20/Ar%20Lounge?updatedAt=1710682020374",
      description: "The Best Of Two Worlds In A Single Layer Cake - A Waffle And A Brownie. With Deliciously Rich Melted Chocolate and Almonds. Your Doorway To Heaven! (Sorry! Our special waffle cakes do not allow for any customization. We do not provide candles or cutlery with this order)",
      },
      
      {
      title: "Berry Red Velvet Waffle Cake (Single Layer)",
      price: "360.48",
      rating: "4.5(7)",
      id: 3,
      image_url:
      "https://ik.imagekit.io/Gokul/FULL%20STACK/Assets%20/Ar%20Lounge?updatedAt=1710682020374",
      description: "Original Red Velvet Single Layer Waffle Cake With Strawberry Compote + Creamy Cheesecake* filling And Melted White Chocolate Topped With Red Velvet Crumbs. A True Original - Enhanced! *Cheesecake flavour filling, contains spray dried cheese powder (Sorry! Our special waffle cakes do not allow for any customization. We do not provide candles or cutlery with this order)",
      },
      
      {
      title: "Kiki & Oreo Waffle Cake (Single Layer)",
      price: "380.48",
      rating: "4.1(4)",
      id: 4,
      image_url:
      "https://ik.imagekit.io/Gokul/FULL%20STACK/Assets%20/Ar%20Lounge?updatedAt=1710682020374",
      description: "Signature black velvet single layer waffle cake layered thick with Kiki spread and topped with Crushed Oreos. A universal favorite! (Sorry! Our special waffle cakes do not allow for any customization. We do not provide candles or cutlery with this order)",
      },
      


  ])


  const [isOpenSingleLayerWaffleCake, setIsOpenSingleLayerWaffleCake] = useState(false);

 

  const toggleOpenSingleLayerWaffleCake = () => {
    setIsOpenSingleLayerWaffleCake(!isOpenSingleLayerWaffleCake);
  };


  return(
    <>

      <div className="2xl:container">
        <div className="w-[90%] md:w-[70%] lg:w-[50%] mx-auto grid-cols-1">
          <p className="sm:text-lg md:text-xl lg:text-2xl font-extrabold">Waffle Cakes</p>

          



<div className="flex justify-between items-center">
            <p className=" sm:text-base md:text-lg lg:text-xl font-bold">Single Layer Waffle Cake (4)</p>
            <button onClick={toggleOpenSingleLayerWaffleCake}>
              {isOpenSingleLayerWaffleCake ? <FaChevronUp /> : <FaChevronDown />}
            </button>
          </div>
          <hr className="my-4 border-[#F2F2F3]" />
          {isOpenSingleLayerWaffleCake &&
            SingleLayerWaffleCakeDataSet.map((e) => {
              return (
                <ChocolateWaffleCard
                  key={e.id}
                  title={e.title}
                  price={e.price}
                  rating={e.rating}
                  img={e.image_url}
                  description={e.description}
                />
              );
            })}
            <div className="bg-[#F2F2F3] mb-4 text-gray-50">-</div>

        </div>    
      </div>    
    </>



  )


};

const OffersandValueDeals = () => {

  let [OffersandValueDealsDataSet] = useState([

    {
      title: "Mini Treats",
      price: "599.44",
      rating: "4.8(16)",
      id: 1,
      image_url:
      "https://ik.imagekit.io/Gokul/FULL%20STACK/The%20Belgian%20Waffle%20Co./Mini%20Treats.jpg?updatedAt=1720364763424",
      description: "Treat your tribe! Save Rs. 67 flat & enjoy Mini Waffle pack of 4 (assorted) + Mini Waffle pack of 4 (chocolate).",
      },
      
      {
      title: "Happiness in mini version + 1 FREE Delight",
      price: "511.19",
      rating: "4.5(13)",
      id: 2,
      image_url:
      "https://ik.imagekit.io/Gokul/FULL%20STACK/The%20Belgian%20Waffle%20Co./Happiness%20in%20mini%20version%20+%201%20FREE%20Delight.jpg?updatedAt=1720364763103",
      description: "Buy Chocolate Mini Waffle Combo pack of 6 and select 1 FREE waffle or pancake from our top picks.",
      },
      
      {
      title: "Best Of The Best",
      price: "660",
      rating: "",
      id: 3,
      image_url:
      "https://ik.imagekit.io/Gokul/FULL%20STACK/The%20Belgian%20Waffle%20Co./Best%20Of%20The%20Best.jpg?updatedAt=1720364762917",
      description: "Share our besties with your besties! Choose any 5 best-selling Waffle from below list for a flat price! (Naked Nutella or Triple Chocolate or Belgian Chocolate Milk or Belgian Chocolate Dark or KitKat Waffle or Red Velvet).",
      },
      
      {
      title: "Keep Cake & Celebrate + 1 FREE Delight",
      price: "580.52",
      rating: "4.1(14)",
      id: 4,
      image_url:
      "https://ik.imagekit.io/Gokul/FULL%20STACK/The%20Belgian%20Waffle%20Co./Keep%20Cake%20&%20Celebrate%20+%201%20FREE%20Delight.jpg?updatedAt=1720364762479",
      description: "Choose any one double layer waffle cake- Death by chocolate Waffle Cake (Double Layer)/ Red velvet waffle Cake (Double Layer)/ Kiki and Oreo Cream waffle cake (Double Layer) and select 1 FREE waffle or pancake from our top picks.",
      },
      
      
      {
      title: "Treats For Two",
      price: "409.10",
      rating: "",
      id: 5,
      image_url:
      "https://ik.imagekit.io/Gokul/FULL%20STACK/The%20Belgian%20Waffle%20Co./Treats%20For%20Two.jpg?updatedAt=1720364762297",
      description: "1 for you, 1 for me & 1 for us. Save Rs. 52 flat & enjoy Belgian Chocolate Milk Waffle + Red Velvet Waffle + Signature Cold Coffee.",
      },
      
      {
      title: "The WaffShake Duo",
      price: "346.67",
      rating: "",
      id: 6,
      image_url:
      "https://ik.imagekit.io/Gokul/FULL%20STACK/The%20Belgian%20Waffle%20Co./The%20WaffShake%20Duo.jpg?updatedAt=1720364762200",
      description: "Triple Chocolate Waffle + Belgian Chocolate Shake.",
      },
      
      {
      title: "Make At Home @ Rs.349",
      price: "349",
      rating: "",
      id: 7,
      image_url:
      "https://ik.imagekit.io/Gokul/FULL%20STACK/The%20Belgian%20Waffle%20Co./Make%20At%20Home%20@%20Rs.349.jpg?updatedAt=1720364762207",
      description: "Save Rs. 78. Make our delicious waffles or pancakes in the comfort of your home with our Original Pancake & Waffle Mix !",
      },
      {
      title: "Make At Home @ Rs.375",
      price: "375",
      rating: "",
      id: 8,
      image_url:
      "https://ik.imagekit.io/Gokul/FULL%20STACK/The%20Belgian%20Waffle%20Co./Make%20At%20Home%20@%20Rs.375.jpg?updatedAt=1720364757941",
      description: "Save Rs. 72. Make our delicious waffles or pancakes in the comfort of your home with our Chocolate Oats Pancake & Waffle Mix !",
      },


  ]);

  const [isOpenOffersandValueDeals, setIsOpenOffersandValueDeals] = useState(false);

  const toggleOpenOffersandValueDeals = () => {
    setIsOpenOffersandValueDeals(!isOpenOffersandValueDeals);
  };


  return(<>

  <div className="2xl:container">
    <div className="w-[90%] md:w-[70%] lg:w-[50%] mx-auto grid-cols-1">
    <p className="sm:text-lg md:text-xl lg:text-2xl font-extrabold">Offers & Value Deals</p>

<div className="flex justify-between items-center">
  <p className=" sm:text-base md:text-lg lg:text-xl font-bold">Offers & Value Deals (5)</p>
  <button onClick={toggleOpenOffersandValueDeals}>
    {isOpenOffersandValueDeals ? <FaChevronUp /> : <FaChevronDown />}
  </button>
</div>
<hr className="my-4 border-[#F2F2F3]" />
{isOpenOffersandValueDeals &&
  OffersandValueDealsDataSet.map((e) => {
    return (
      <ChocolateWaffleCard
        key={e.id}
        title={e.title}
        price={e.price}
        rating={e.rating}
        img={e.image_url}
        description={e.description}
      />
    );
  })}
  <div className="bg-[#F2F2F3] mb-4 text-gray-50">-</div>
    </div>

  </div>
  
  
  
  
  </>)

};

const Beverages = () =>{

  let [BeveragesDataSet] = useState ([

    {
      title: "Blueberry White Chocolate Shake",
      price: "180",
      rating: "4.9(3)",
      id: 1,
      image_url:
      "https://ik.imagekit.io/Gokul/FULL%20STACK/The%20Belgian%20Waffle%20Co./Blueberry%20White%20Chocolate%20Shake",
      description: "A smoothie blended with bluberries and white chocolate (Images are for representation purpose only)",
      },
      
      {
      title: "Belgian Chocolate Shake",
      price: "170.95",
      rating: "4.4(67)",
      id: 2,
      image_url:
      "https://ik.imagekit.io/Gokul/FULL%20STACK/The%20Belgian%20Waffle%20Co./Belgian%20Chocolate%20Shake",
      description: "One Of Our Darker Chocolate Shakes Made With Belgian Chocolate. (Images are for representation purpose only)",
      },
      {
      title: "Nutella Shake",
      price: "179.05",
      rating: "5.0(21)",
      id: 3,
      image_url:
      "https://ik.imagekit.io/Gokul/FULL%20STACK/The%20Belgian%20Waffle%20Co./Nutella%20Shake",
      description: "Our Signature Shake made with real Nutella! (Images are for representation purpose only)",
      },
      
      {
      title: "KitKat Shake",
      price: "180",
      rating: "4.9(25)",
      id: 4,
      image_url:
      "https://ik.imagekit.io/Gokul/FULL%20STACK/The%20Belgian%20Waffle%20Co./KitKat%20Shake",
      description: "A Chocolatey Shake topped with Kit Kat bits! (Images are for representation purpose only)",
      },
      {
      title: "Oreo Shake",
      price: "170.95",
      rating: "4.9(16)",
      id: 5,
      image_url:
      "https://ik.imagekit.io/Gokul/FULL%20STACK/The%20Belgian%20Waffle%20Co./Oreo%20Shake",
      description: "Thick shake blended with tons of chocloate Oreos! (Images are for representation purpose only)",
      }
  ]);

  let [CoolersDataSet] = useState([

    {
      title: "Peach - Iced Tea",
      price: "113.81",
      rating: "1.5(20)",
      id: 1,
      image_url:
      "https://ik.imagekit.io/Gokul/FULL%20STACK/The%20Belgian%20Waffle%20Co./Peach%20-%20Iced%20Tea",
      description: "Refreshing peach Iced tea (Images are for representation purpose only)",
      },
      {
      title: "Lemon - Iced Tea",
      price: "113.81",
      rating: "2.3(37)",
      id: 2,
      image_url:
      "https://ik.imagekit.io/Gokul/FULL%20STACK/The%20Belgian%20Waffle%20Co./Lemon%20-%20Iced%20Tea",
      description: "Refreshing Lemon Iced Tea (Images are for representation purpose only)",
      }
      

  ]);

  const [isOpenBeverages, setIsOpenBeverages] = useState(false);
  const [isOpenCoolers, setIsOpenCoolers] = useState(false);

  const toggleOpenBeverages = () => {
    setIsOpenBeverages(!isOpenBeverages);
  };

  const toggleOpenCoolers = () => {
    setIsOpenCoolers(!isOpenCoolers);
  };

return(
  <>
  <div className="2xl:container">
    <div className="w-[90%] md:w-[70%] lg:w-[50%] mx-auto grid-cols-1">
    <p className="sm:text-lg md:text-xl lg:text-2xl font-extrabold">Beverages</p>

<div className="flex justify-between items-center">
  <p className=" sm:text-base md:text-lg lg:text-xl font-bold">Shakes (5)</p>
  <button onClick={toggleOpenBeverages}>
    {isOpenBeverages ? <FaChevronUp /> : <FaChevronDown />}
  </button>
</div>
<hr className="my-4 border-[#F2F2F3]" />
{isOpenBeverages &&
  BeveragesDataSet.map((e) => {
    return (
      <ChocolateWaffleCard
        key={e.id}
        title={e.title}
        price={e.price}
        rating={e.rating}
        img={e.image_url}
        description={e.description}
      />
    );
  })}


<div className="flex justify-between items-center">
  <p className=" sm:text-base md:text-lg lg:text-xl font-bold">Coolers (2)</p>
  <button onClick={toggleOpenCoolers}>
    {isOpenCoolers ? <FaChevronUp /> : <FaChevronDown />}
  </button>
</div>
<hr className="my-4 border-[#F2F2F3]" />
{isOpenCoolers &&
  CoolersDataSet.map((e) => {
    return (
      <ChocolateWaffleCard
        key={e.id}
        title={e.title}
        price={e.price}
        rating={e.rating}
        img={e.image_url}
        description={e.description}
      />
    );
  })}

  <div className="bg-[#F2F2F3] mb-4 text-gray-50">-</div>
    </div>

  </div>  
  </>
)
}

// const Cart = () => {
//   const { cart } = useCart();

//   return (
//     <div className="mt-8 p-4 border rounded">
//       <h2 className="text-xl font-bold mb-4">Cart</h2>
//       {cart.length === 0 ? (
//         <p className="text-gray-500">Your cart is empty.</p>
//       ) : (
//         <ul>
//           {cart.map((item, index) => (
//             <li key={index} className="flex items-center space-x-4 mb-4">
//               <img src={item.img} alt={item.title} className="h-16 w-16 object-cover rounded" />
//               <div>
//                 <h3 className="text-lg font-bold">{item.title}</h3>
//                 <p className="text-gray-500">&#8377;{item.price}</p>
//               </div>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };


const Footer = () => {
  return (
    <>
    <div className="2xl:container">

      <div className="w-[90%] md:w-[70%] lg:w-[50%] mx-auto bg-[#F0F0F5] p-5 text-[#999BA4]">

        <div className="flex items-center space-x-3">
          <img src="https://ik.imagekit.io/Gokul/FULL%20STACK/The%20Belgian%20Waffle%20Co./fssai_final_edss9i?updatedAt=1720936695853" alt="FSSAI" className="h-4 md:6 lg:h-8" />

          <p className="text-xs  lg:text-base">License No. 12419030001162</p>
        </div>
        <hr className="my-4 border-[#F2F2F3]" />

        <p className="text-xs  lg:text-base">The Belgian Waffle Co.</p>
        <p className="text-xs  lg:text-base">(Outlet:Gandhi Nagar)</p>

        <div className="flex space-x-2 items-center">
          <img src="https://ik.imagekit.io/Gokul/FULL%20STACK/The%20Belgian%20Waffle%20Co./navigation.png?updatedAt=1720937133380" alt="Location" className="h-3 lg:h-5" />
          <p className="text-xs  lg:text-base">No 21, Ground floor, Silk mill bus stop, katpadi , main road, near archanaas hotel, Gandhi nagar, Vellore 6</p>
        </div>

        <hr className="my-4 border-[#F2F2F3]" />

        <p className="text-center text-[#52555A] font-extrabold text-xs  lg:text-base">For better experience, download the Swiggy app now
        </p>

        <div className="flex items-center justify-center space-x-3">
          <img src="https://ik.imagekit.io/Gokul/FULL%20STACK/The%20Belgian%20Waffle%20Co./play_store.png?updatedAt=1720936665737" alt="Google Play" className="h-6 lg:h-12"/>

          <img src="https://ik.imagekit.io/Gokul/FULL%20STACK/The%20Belgian%20Waffle%20Co./app_store.png?updatedAt=1720936679374" alt="App Store" className="h-6 lg:h-12" />
        </div>

      </div>

    </div>

    </>
  );
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <TheBelgianWaffleCo/>
      <DealsForYou/>
      <Menu/>
      <Waffle/>
      <WaffleCakes/>
      <OffersandValueDeals/>
      <Beverages/>
      {/* <Cart/> */}
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
