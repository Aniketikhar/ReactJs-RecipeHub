import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import "./RecipeDetails.css";

function RecipeDetails() {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState(null);
  const Ingredients = [];

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`
        );
        setRecipe(response.data.meals[0]);
      } catch (error) {
        console.error("Error fetching recipe details:", error.message);
      }
    };

    fetchRecipeDetails();
  }, [recipeId]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  const steps = recipe.strInstructions
    .split("\r\n")
    .filter((step) => step.trim() !== "");

  for (let i = 0; i < 20; i++) {
    let ingredient = recipe[`strIngredient${i}`];
    let measure = recipe[`strMeasure${i}`];

    if (ingredient && measure) {
      Ingredients.push({ ingredient, measure });
    }
  }

  

  // AIzaSyCwWkhPqciZj0H886w7juiv3Zcr9JqKsT4
  return (
    <div>
      <Navbar />

      <div className="container mt-5 details-recipe">
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

        <div className="text-center">
          <img
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
            width={700}
            height={500}
            className=""
          />
        </div>
        <div className="row mt-5">
          <div className="col-4">
            <h3>Ingredients</h3>
          <ul type='none' style={{paddingLeft: '0px'}}>
            {Ingredients.map((ingre) => {
              return (
                <>
                <li >
                  {ingre.measure} {ingre.ingredient}
                </li>
                <hr style={{margin: '5px'}} />
                </>
              );
            })}
            </ul>
          </div>
          <div className="col-8">
            <iframe
              title="YouTube Video"
              width="600"
              height="300"
              src={`https://www.youtube.com/embed/${
                recipe.strYoutube.split("=")[1]
              }`}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>

            <h3 className="mt-4">Instructions</h3>
            <div className="instruct-list">
              <ul>
                {/* Render steps */}
                {steps.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetails;
