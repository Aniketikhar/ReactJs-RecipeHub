import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import "./Category.css";
import { Link } from "react-router-dom";

function CategoryRecipes() {
  const { categoryName } = useParams();
  const [recipes, setRecipes] = useState([]);
  const [categoryDescription, setCategoryDescription] = useState("");

  useEffect(() => {
    const fetchCategoryDetails = async () => {
      try {
        const categoryResponse = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`
        );
        const descriptionResponse = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/categories.php`
        );

        setRecipes(categoryResponse.data.meals);
        const category = descriptionResponse.data.categories.find(
          (category) => category.strCategory === categoryName
        );
        if (category) {
          setCategoryDescription(category.strCategoryDescription);
        }
      } catch (error) {
        console.error("Error fetching category details:", error.message);
      }
    };

    fetchCategoryDetails();
  }, [categoryName]);

  return (
    <div>
      <div className="position-relative">
        <Navbar />
      </div>
      <div className="header-category p-5 container rounded-5">
        <div className="category-content  ">
          <h2>
            {categoryName} ({recipes.length} recipes)
          </h2>
          <p>{categoryDescription}</p>
        </div>
      </div>
      <div className="products container">
        <div className="row mt-5 g-3 g-md-1">
          {recipes.map((recipe) => (
            <div className="col-6 col-md-3 ">
              <Link to={`/recipes/${recipe.idMeal}`}>
                <div className="card border-0 m-3 text-center">
                  <img
                    src={recipe.strMealThumb}
                    alt=""
                    className="img-fluid rounded-5 mx-auto"
                  />
                  <div className="card-body p-0">
                    <h5 className="text-decoration-none" key={recipe.idMeal}>
                      {recipe.strMeal}
                    </h5>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* <ul>
        {recipes.map((recipe) => (
          <li key={recipe.idMeal}>{recipe.strMeal}</li>
        ))}
        </ul> */}
      </div>
    </div>
  );
}

export default CategoryRecipes;
