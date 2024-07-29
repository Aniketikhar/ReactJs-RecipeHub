import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import "./RecipeDetails.css";
import Footer from "../../components/Footer/Footer";
import { useTheme } from "../../contexts/Theme";


import Shepherd from "shepherd.js";
import "../../shepherd.css";

function RecipeDetails() {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState(null);
  const Ingredients = [];
  const { isDarkMode } = useTheme();
  const [loading, setLoading] = useState(true);

  console.log(recipeId);
      

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`
        );
        setRecipe(response.data.meals[0]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching recipe details:", error.message);
      }
    };

    window.scrollTo(0 , 0);

    fetchRecipeDetails();
  }, [recipeId]);

  

  const steps = recipe?.strInstructions
    .split("\r\n")
    .filter((step) => step.trim() !== "");

  for (let i = 1; i < 20; i++) {
    let ingredient;
    let measure;

    if(recipe){
      ingredient = recipe[`strIngredient${i}`];
      measure = recipe[`strMeasure${i}`];
    }

    if (ingredient && measure) {
      Ingredients.push({ ingredient, measure });
    }
  }

  return (
    <div className={isDarkMode? " bg-dark text-white" : " "}>
      <Navbar />
      {
        loading == true ? (
          <div className="spinner">
            <div className="spin"></div>
          </div>
        ) : 

      <div className="container my-md-5 details-recipe">
        {/* <div className="img-contain text-center">
         
        </div> */}
        <h1 className="recipe-name">{recipe.strMeal}</h1>
        <div className="data row">
          <div className="col-3">
            <h6>Category</h6>
            <p>{recipe.strCategory}</p>
          </div>
          <div className="col-3">
            <h6>Area</h6>
            <p>{recipe.strArea}</p>
          </div>
          <div className="col-3">
            <h6>Source</h6>
            <a href={recipe.strSource} target="blank">
              Follow Link
            </a>
          </div>
          <div className="col-3">
            <h6>Tags</h6>
            <small>{recipe.strTags}</small>
          </div>
        </div>
        <hr />

        <div className=" row">
          <div className="col-12 col-md-8">
            <img
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
              
              className="recipe-thumb"
            />
          </div>
          <div className="col-12 col-md-4">
            <h3>Ingredients</h3>
            <ul type="none" style={{ paddingLeft: "0px" }}>
              {Ingredients?.map((ingre) => {
                return (
                  <>
                    <li>
                      {ingre.measure} {ingre.ingredient}
                    </li>
                    <hr style={{ margin: "5px", color: "orange" }} />
                  </>
                );
              })}
            </ul>
          </div>
        </div>
        <div className=" m-md-5">
          <h3 className="mt-4">Instructions</h3>
          <div className="instruct-list">
            <ul>
              {/* Render steps */}
              {steps.map((step, index) => (
                <li key={index} className={isDarkMode? "text-white" : " "}>{step}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="container youtube-video">
        <iframe
          title="YouTube Video"
          // width="900"
          // height="500"
          className="h-100 w-100"
          src={`https://www.youtube.com/embed/${
            recipe.strYoutube.split("=")[1]
          }`}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        </div>
      </div>
}
      <Footer />
    </div>
  );
}

export default RecipeDetails;
