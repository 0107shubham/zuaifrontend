import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";

const AdminNavbar = () => {
  const [formData, setFormData] = useState({
    imageUrl: "",
    authorName: "",
    authorUrl: "",
    category: "trending", // Default to "Trending"
    heading: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://zuaibackend.vercel.app/blog",
        formData
      );
      console.log("Blog created successfully:", response.data);
      setFormData({
        imageUrl: "",
        authorName: "",
        authorUrl: "",
        category: "trending",
        heading: "",
        description: "",
      });
    } catch (error) {
      console.error("There was an error creating the blog:", error);
    }
  };

  return (
    <div className="bg-black h-[5vw] flex justify-between items-center px-4">
      <ul>
        <Link to="/" className="text-white text-4xl">
          StoryLoom
        </Link>
      </ul>

      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">
            <p className="text-white">Create Blog</p>
            <FaPlus className="ml-2 text-white" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] bg-white">
          <DialogHeader>
            <DialogTitle>Create Blog</DialogTitle>
            <DialogDescription>
              Fill out the form below to create a new blog post.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="imageUrl" className="text-right">
                Image URL
              </Label>
              <Input
                id="imageUrl"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="authorName" className="text-right">
                Author Name
              </Label>
              <Input
                id="authorName"
                name="authorName"
                value={formData.authorName}
                onChange={handleChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="authorUrl" className="text-right">
                Author URL
              </Label>
              <Input
                id="authorUrl"
                name="authorUrl"
                value={formData.authorUrl}
                onChange={handleChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="category" className="text-right">
                Category
              </Label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="col-span-3 p-2 border border-gray-300 rounded-md"
              >
                <option value="trending">Trending</option>
                <option value="newest">Newest</option>
                <option value="popular">Popular</option>
              </select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="heading" className="text-right">
                Heading
              </Label>
              <Input
                id="heading"
                name="heading"
                value={formData.heading}
                onChange={handleChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="col-span-3 p-2 border border-gray-300 rounded-md"
                rows="4"
              />
            </div>
            <DialogFooter>
              <Button type="submit">Create Blog</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminNavbar;
