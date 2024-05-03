import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './Categories.css';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/categories.php"
        );
        setCategories(response.data.categories.slice(2,8));
      } catch (error) {
        console.error("Error fetching categories:", error.message);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div>
      <div className="sup-del container mb-5">
        <h2 className="heroes">Popular Categories</h2>
        <div className="row g-3 g-md-1">
          {categories.map((category) => (
            <div className="col-6 col-md-2 ">
              <Link to={`/categories/${category.strCategory}`}>
                <div className="card border-0 text-center">
                  <img
                    src={category.strCategoryThumb}
                    alt=""
                    className="img-fluid cat-img mx-auto"
                  />
                  <div className="card-body p-0">
                    <h5 className="text-decoration-none" key={category.strCategory}>
                      {category.strCategory}
                    </h5>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
