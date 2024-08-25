import React from "react";
import Content from "./Content";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="px-4">
      <div>
        {" "}
        <div className="flex items-center">
          <h1 className="text-[100px] text-black font-extrabold">Blog</h1>
          <p className="text-black">
            loreDolore ut laborum excepteur anim laborum velit ipsum Lorem
            <br />
            occaecat magna dolor reprehenderit minim.
          </p>
        </div>
        <ul className="flex gap-4 text-[24px] font-bold">
          <Link
            to="/categoryTrending"
            className="hover:text-red-500 text-[26px] cursor-pointer"
          >
            Trending
          </Link>
          <Link
            to="/categoryPopular"
            className="hover:text-red-500 text-[26px] cursor-pointer"
          >
            Popular
          </Link>
          <Link
            to="/categoryNewest"
            className="hover:text-red-500 text-[26px] cursor-pointer"
          >
            Newest
          </Link>
        </ul>
      </div>
      <Content />
    </div>
  );
};

export default Home;
