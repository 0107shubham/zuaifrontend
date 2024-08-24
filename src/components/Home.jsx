import React from "react";
import Content from "./Content";
import Footer from "./Footer";

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
        <ul className="flex gap-4">
          <li>Trending</li>
          <li>Popular</li>
          <li>Newest</li>
        </ul>
      </div>
      <Content />
    </div>
  );
};

export default Home;
