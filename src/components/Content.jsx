import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { FaRegHeart } from "react-icons/fa6";
import { FaShareAlt } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Content = () => {
  const { data, loading, error } = useContext(DataContext);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  // Filter data by category
  const trendingItems =
    data && data.filter((item) => item.category === "trending").slice(0, 3);

  const popularItems =
    data && data.filter((item) => item.category === "popular").slice(0, 3);

  const newestItems =
    data && data.filter((item) => item.category === "newest").slice(0, 3);

  return (
    <div className="flex flex-col gap-5 bg-slate-100 my-4 ">
      <div className="shadow-xl bg-white w-full">
        <h1 className="text-[32px] font-bold py-4 ">Trending Now</h1>
        <ul className="flex justify-start gap-4  w-full">
          {trendingItems.map((item) => (
            <li className="shadow-md p-3 rounded-lg w-[400px] " key={item.id}>
              <div className="flex items-center gap-4">
                <img src={item.authorUrl} className="w-[40px] rounded-full" />
                <p className="text-[18px] text-gray-600 font-medium">
                  {item.authorName}
                </p>
              </div>
              <img
                src={item.imageUrl}
                alt={"tre1"}
                className="aspect-video p-2 brightness-125"
              />
              <p className="text-black font-semibold text-[24px]">
                {item.heading}
              </p>
              <div className="flex justify-between ">
                <div className="flex gap-3">
                  <FaRegHeart className="text-[24px]  hover:text-red-600 cursor-pointer hover:scale-105 " />
                  <FaShareAlt className="text-[24px]  hover:text-[#3295a8] cursor-pointer  hover:scale-105   " />
                </div>
                <Link
                  to={`/blogDetails/${item.id}`}
                  className=" hover:underline hover:text-[#7932a8] hover:scale-105  cursor-pointer text-[18px] font-medium"
                >
                  View More
                </Link>
              </div>
            </li>
          ))}
          <div className=" w-[100px] cursor-pointer flex justify-center items-center text-gray-500 hover:text-gray-800 hover:scale-110">
            <Link to="/categoryTrending" className="flex flex-col ">
              <FaArrowRight className="text-[35px] " />
              <p className="text-[20px] text-[#6e3639] font-semibold">More</p>
            </Link>
          </div>
        </ul>
      </div>
      <div className="shadow-xl bg-white w-full">
        <h1 className="text-[32px] font-bold py-4">Popular</h1>
        <ul className="flex justify-start gap-4 w-full ">
          {popularItems.map((item) => (
            <li className="shadow-md p-3 rounded-lg  w-[400px] " key={item.id}>
              <div className="flex items-center gap-4">
                <img src={item.authorUrl} className="w-[40px] rounded-full" />
                <p className="text-[18px] text-gray-600 font-medium">
                  {item.authorName}
                </p>
              </div>
              <img
                src={item.imageUrl}
                alt={"tre1"}
                className="aspect-video p-2 brightness-125"
              />
              <p className="text-black font-semibold text-[24px]">
                {item.heading}
              </p>
              <div className="flex justify-between ">
                <div className="flex gap-3">
                  <FaRegHeart className="text-[24px]  hover:text-red-600 cursor-pointer hover:scale-105 " />
                  <FaShareAlt className="text-[24px]  hover:text-[#3295a8] cursor-pointer  hover:scale-105   " />
                </div>
                <Link
                  to={`/blogDetails/${item.id}`}
                  className=" hover:underline hover:text-[#7932a8] hover:scale-105  cursor-pointer text-[18px] font-medium"
                >
                  View More
                </Link>
              </div>
            </li>
          ))}
          <div className=" w-[100px]  cursor-pointer flex justify-center items-center text-gray-500 hover:text-gray-800 hover:scale-110">
            <Link to="/categoryPopular" className="flex flex-col ">
              <FaArrowRight className="text-[35px] " />
              <p className="text-[20px] text-[#6e3639] font-semibold">More</p>
            </Link>
          </div>
        </ul>
      </div>
      <div className="shadow-xl bg-white">
        <h1 className="text-[32px] font-bold py-4">Newest</h1>
        <ul className="flex justify-start gap-4  w-full">
          {newestItems.map((item) => (
            <li className="shadow-md p-3 rounded-lg  w-[400px] " key={item.id}>
              <div className="flex items-center gap-4">
                <img src={item.authorUrl} className="w-[40px] rounded-full" />
                <p className="text-[18px] text-gray-600 font-medium">
                  {item.authorName}
                </p>
              </div>
              <img
                src={item.imageUrl}
                alt={"tre1"}
                className="aspect-video p-2 brightness-125"
              />
              <p className="text-black font-semibold text-[24px]">
                {item.heading}
              </p>
              <div className="flex justify-between ">
                <div className="flex gap-3">
                  <FaRegHeart className="text-[24px]  hover:text-red-600 cursor-pointer hover:scale-105 " />
                  <FaShareAlt className="text-[24px]  hover:text-[#3295a8] cursor-pointer  hover:scale-105   " />
                </div>
                <Link
                  to={`/blogDetails/${item.id}`}
                  className=" hover:underline hover:text-[#7932a8] hover:scale-105  cursor-pointer text-[18px] font-medium"
                >
                  View More
                </Link>
              </div>
            </li>
          ))}
          <div className=" w-[100px]  cursor-pointer flex justify-center items-center text-gray-500 hover:text-gray-800 hover:scale-110">
            <Link to="/categoryNewest" className="flex flex-col ">
              <FaArrowRight className="text-[35px] " />
              <p className="text-[20px] text-[#6e3639] font-semibold">More</p>
            </Link>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Content;
