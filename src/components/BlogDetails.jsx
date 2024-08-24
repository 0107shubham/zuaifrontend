import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { IoMdPerson } from "react-icons/io";
import { GoComment } from "react-icons/go";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  const { data, loading, error } = useContext(DataContext);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const filteredData = data.find((item) => item.id.toString() === id);

  if (!filteredData) {
    return <p>Blog post not found.</p>;
  }

  console.log(filteredData);

  return (
    <div className="w-full">
      <div className="w-full px-[6px] md:px-[21vw] py-[5vw] ">
        {/* Comment Section */}
        <div className="mb-8 bg-[#F5F5F5]">
          <p className="text-[4vw]   sm:text-[5vw]  md:text-[3vw] font-bold">
            {filteredData.Name}
          </p>
          {filteredData.imageUrl && (
            <img
              src={filteredData.imageUrl}
              alt="party"
              className="w-full aspect-video"
            />
          )}

          <div className="w-full px-[3px] sm:px-[3vw]">
            <div className="w-full flex items-center   my-[1vw]">
              <p className="text-[16px] md:text-[1.4vw] text-gray-600 w-full  flex items-center  px-[3vw]">
                <span className="flex items-center">
                  {" "}
                  <img
                    src={filteredData.authorUrl}
                    className="w-[40px] rounded-full"
                  />
                  <span className="mx-[.5vw]">{filteredData.authorName}</span>
                </span>{" "}
                |{" "}
                <span className="flex items-center">
                  {" "}
                  <GoComment className="mx-[.5vw]" />
                  <span className="mx-[.5vw]">comment</span>
                </span>
              </p>
            </div>

            <div className="h-[.05vw] w-full bg-gray-500  my-[1vw]"></div>
            <h2 className="text-[16px] sm:text-[2vw] font-semibold mt-[1vw]">
              {filteredData.heading}
            </h2>
            <p className="mt-[1vw] text-[14px] sm:text-[1vw] text-gray-500">
              {filteredData.description}
            </p>

            {/* Leave a Reply */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
