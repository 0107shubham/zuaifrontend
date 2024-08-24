import Navbar from "./components/navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import { DataProvider } from "./context/DataContext";
import Footer from "./components/Footer";
import BlogDetails from "./components/blogDetails";
import CategoryBlogsDetailsTrending from "./components/CategoryBlogsDetailsTrending";
import CategoryBlogsDetailsPopular from "./components/CategoryDeatailsPopular";
import CategoryBlogsDetailsNewewst from "./components/CategoryDetailsNewest";
import Admin from "./components/Admin";
import AdminNavbar from "./components/AdminNavbar";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Home />
          <Footer />
        </>
      ),
    },
    {
      path: "/blogDetails/:id",
      element: (
        <>
          <Navbar />
          <BlogDetails />
          <Footer />
        </>
      ),
    },
    {
      path: "admin",
      element: (
        <>
          <AdminNavbar />
          <Admin />
          <Footer />
        </>
      ),
    },
    {
      path: "/categoryTrending",
      element: (
        <>
          <Navbar />
          <CategoryBlogsDetailsTrending />
          <Footer />
        </>
      ),
    },
    {
      path: "/categoryPopular",
      element: (
        <>
          <Navbar />
          <CategoryBlogsDetailsPopular />
          <Footer />
        </>
      ),
    },
    {
      path: "/categoryNewest",
      element: (
        <>
          <Navbar />
          <CategoryBlogsDetailsNewewst />
          <Footer />
        </>
      ),
    },
  ]);
  return (
    <DataProvider className="text-black">
      <RouterProvider router={router} />
    </DataProvider>
  );
}

export default App;
