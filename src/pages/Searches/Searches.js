import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { useTheme } from "../../contexts/Theme";

function Searches() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get("query");
  const { isDarkMode } = useTheme();

  // const [searchTerm, setSearchTerm] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  // const [filteredCategories, setFilteredCategories] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
        );
        const responseCat = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${searchTerm}`
        );
        setRecipes(response.data.meals || []);
        setCategories(responseCat.data.meals || []);
        console.log("categories", responseCat.data.meals);
        console.log(response.data.meals);
      } catch (error) {
        console.error("Error fetching recipes:", error.message);
      }
    };

    window.scrollTo(0 , 0);
    fetchRecipes();
  }, [searchTerm]);

  categories.forEach(element => {
    console.log(element);
  });

  useEffect(() => {
    // Filter recipes based on search term
    setFilteredRecipes(
      recipes.filter((recipe) =>
        recipe.strMeal.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    // setFilteredCategories(
    //   categories.filter((category) =>
    //   category.strMeals.toLowerCase().includes(searchTerm.toLowerCase())
    //   )
    // );
  }, [recipes, categories, searchTerm]);

  return (
    <div className={isDarkMode? "bg-dark text-white": " "}>
      <Navbar />

      <div className="container mx-auto">
        <p className="mt-3 fw-bold" key={searchTerm}>Showing results for: {searchTerm}</p>
        <div className="row mt-5 g-3 g-md-1 row-cols-4">
          {filteredRecipes.map((recipe) => (
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
          {categories.map((category) => (
            <div className="col-6 col-md-3 ">
            <Link to={`/recipes/${category.idMeal}`}>
              <div className="card border-0 m-3 text-center">
                <img
                  src={category.strMealThumb}
                  alt=""
                  className="img-fluid rounded-5 mx-auto"
                />
                <div className="card-body">
                  <h5 className="card-title">{category.strMeal}</h5>
                </div>
              </div>
            </Link>
            </div>
          ))}
        </div>

        
      </div>
      <Footer />
    </div>
  );
}

export default Searches;
