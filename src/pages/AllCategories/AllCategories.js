import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useTheme } from "../../contexts/Theme";

const AllCategories = () => {
  const [categories, setCategories] = useState([]);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/categories.php"
        );
        setCategories(response.data.categories);
      } catch (error) {
        console.error("Error fetching categories:", error.message);
      }
    };


    window.scrollTo(0 , 0);
    fetchCategories();
  }, []);

  return (
    <div className={isDarkMode ? "bg-dark" : " "}>
      <Navbar />
      <div className="header-category  container">
        <div className="category-content   ">
          <img
            src="/assets/pexels-ella-olsson-572949-1640774.jpg"
            className="img-fluid"
            alt="banner"
          />
          <h2 className={isDarkMode ? "mt-3 text-white" : " mt-3"}>
            All Categories
          </h2>
          {/* <p>{categoryDescription}</p> */}
        </div>
      </div>
      <div className="categories container row mx-auto mt-5">
        {categories.map((category) => (
          <div className="col-6 col-md-4 col-lg-3">
            <Link to={`/categories/${category.strCategory}`}>
              <div
                className={
                  isDarkMode
                    ? "card border-0 text-center text-white bg-dark"
                    : " card border-0 text-center"
                }
              >
                <img
                  src={category.strCategoryThumb}
                  alt=""
                  className="img-fluid mx-auto"
                />
                <div className="card-body">
                  <h5 className="card-title">{category.strCategory}</h5>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default AllCategories;
