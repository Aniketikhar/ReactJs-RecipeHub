import React, { useState, useEffect } from "react";
import { StarFill } from "react-bootstrap-icons";
import "./Varieties.css";
import { useTheme } from "../../contexts/Theme";
import axios from "axios";
import { Link } from "react-router-dom";

const Varieties = () => {
  const [recipeIds] = useState([
     52839, 52829,53015, 52894, 52897, 52989,
  ]);
  const [recipes, setRecipes] = useState([]);
  const [loading , setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const promises = recipeIds.map(async (element) => {
          const response = await axios.get(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${element}`
          );
          return response.data.meals[0]; // Assuming the API returns an array of meals
        });
        const fetchedRecipes = await Promise.all(promises);
        setRecipes(fetchedRecipes);
        setLoading(false);
        console.log(recipes);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipes();
  }, [recipeIds, recipes]);

  const limit = 3;
  const { isDarkMode } = useTheme();
  return (
    <div>
      <div className="sup-del container mt-5">
        <h2 className={isDarkMode ? "text-white" : "heroes"}>
          Super Delicious
        </h2>
        <div className="row mt-4">
          {
          loading == true ? (
            <div className="spinner">
              <div className="spin"></div>
            </div>
          ) :        
          recipes.slice(0, limit).map((recipe) => (
            <div className="col-md-4">
              <Link to={`/recipes/${recipe.idMeal}`}>
                <div
                  className={
                    isDarkMode
                      ? "card border-0 mb-5 bg-dark text-white"
                      : "card border-0 mb-5"
                  }
                >
                  <img
                    src={recipe.strMealThumb}
                    alt=""
                    className="variety-thumb"
                    
                  />
                  <div className="card-body p-0">
                    <p className="m-0">
                      <StarFill color="orange" />
                      <StarFill color="orange" />
                      <StarFill color="orange" />
                      <StarFill color="orange" />
                      <StarFill color="orange" />
                    </p>

                    <h5 className="m-0">{recipe.strMeal}</h5>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="sup-del container ">
        <h2 className={isDarkMode ? "text-white" : "heroes"}>Sweet Tooth</h2>
        <div className="row mt-4">
          {recipes.slice(limit, 6).map((recipe) => (
            <div className="col-md-4">
              <Link to={`/recipes/${recipe.idMeal}`}>
                <div
                  className={
                    isDarkMode
                      ? "card border-0 mb-5 bg-dark text-white"
                      : "card border-0 mb-5"
                  }
                >
                  <img
                    src={recipe.strMealThumb}
                    alt=""
                    className="variety-thumb"
                    
                  />
                  <div className="card-body p-0">
                    <p className="m-0">
                      <StarFill color="orange" />
                      <StarFill color="orange" />
                      <StarFill color="orange" />
                      <StarFill color="orange" />
                      <StarFill color="orange" />
                    </p>

                    <h5 className="m-0">{recipe.strMeal}</h5>
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

export default Varieties;
