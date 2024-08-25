import React, { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";
import { FaRegHeart, FaShareAlt, FaTrash, FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { toast } from "react-toastify";

const Admin = () => {
  const { data, setData, loading, error } = useContext(DataContext);
  const [editItem, setEditItem] = useState(null);

  const handleDelete = async (id) => {
    const previousData = data; // Keep a reference to the previous state
    setData((prevData) => prevData.filter((item) => item.id !== id));

    try {
      await axios.delete(`https://zuaibackend.vercel.app/posts/${id}`);
      toast.success("Blog deleted successfully");
    } catch (err) {
      setData(previousData); // Revert state on failure
      toast.error("Error deleting blog");
    }
  };

  const handleEdit = async () => {
    console.log("update before", data);

    try {
      await axios.put(
        `https://zuaibackend.vercel.app/posts/${editItem.id}`,
        editItem
      );
      console.log("update after", data);
      setData((prevData) =>
        prevData.map((item) => (item.id === editItem.id ? editItem : item))
      );

      toast.success("Blog updated successfully");
      setEditItem(null); // Close the edit dialog
    } catch (err) {
      toast.error("Error updating blog");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <div className="shadow-xl">
        <h1 className="text-[32px] font-bold py-4">Popular</h1>
        <ul className="grid grid-cols-3 gap-4 w-full ">
          {data.map((item) => (
            <li className="shadow-md p-3 rounded-lg" key={item.id}>
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
                  <FaEdit
                    className="text-[24px] hover:text-blue-600 cursor-pointer hover:scale-105"
                    onClick={() => setEditItem(item)}
                  />
                  <FaTrash
                    className="text-[24px] hover:text-red-600 cursor-pointer hover:scale-105"
                    onClick={() => handleDelete(item.id)}
                  />
                </div>
              </div>
            </li>
          ))}
          <div className=" w-[10vw] cursor-pointer flex justify-center items-center text-gray-500 hover:text-gray-800 hover:scale-110"></div>
        </ul>
      </div>

      {editItem && (
        <Dialog open={editItem !== null} onOpenChange={() => setEditItem(null)}>
          <DialogContent className="sm:max-w-[425px] bg-white">
            <DialogHeader>
              <DialogTitle>Edit Blog</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="heading" className="text-right">
                  Heading
                </Label>
                <Input
                  id="heading"
                  value={editItem.heading}
                  onChange={(e) =>
                    setEditItem({ ...editItem, heading: e.target.value })
                  }
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="description" className="text-right">
                  Description
                </Label>
                <Input
                  id="description"
                  value={editItem.description}
                  onChange={(e) =>
                    setEditItem({ ...editItem, description: e.target.value })
                  }
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="category" className="text-right">
                  Category
                </Label>
                <select
                  id="category"
                  value={editItem.category}
                  onChange={(e) =>
                    setEditItem({ ...editItem, category: e.target.value })
                  }
                  className="col-span-3 border border-gray-300 p-2 rounded-lg"
                >
                  <option value="trending">Trending</option>
                  <option value="newest">Newest</option>
                  <option value="popular">Popular</option>
                </select>
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" onClick={handleEdit}>
                Save changes
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default Admin;
