import React, { useEffect, useState } from "react";
import "./Header.css";
import { useTheme } from "../../contexts/Theme";
import axios from "axios";
import { Link } from "react-router-dom";

const Header = () => {
  const [item, setItem] = useState();
  const { isDarkMode } = useTheme();

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/lookup.php?i=52917"
        );
        setItem(response.data.meals[0]); // Access the first meal from the meals array
      } catch (error) {
        console.error("Error fetching API:", error);
      }
    };

    fetchApi();
  }, []);
  if (!item) {
    return <div>Loading...</div>;
  }

  console.log("hello");
  
  return (
    <div className="container my-5 text-black">
      <div className={isDarkMode ? "row header-dark" : "row header"}>
        <div className="col-md-7 p-0">
          <img src={item.strMealThumb} alt="header" className="" height={520} width={700} />
        </div>
        <div className="col-md-5">
          <div className="content m-5 p-md-5">
            <p>
              <i className="fa-solid fa-arrow-trend-up mx-2" />
              85% would make this again
            </p>
            <Link className={isDarkMode? "text-white":"text-black"} to={`/recipes/${item.idMeal}`}>
            <h1 className="heading">{item.strMeal}</h1>
            </Link>
            <p>
            Delightful combination of creamy custard infused with the sweet flavor of white chocolate,  topped with a satisfyingly crisp caramelized sugar crust.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
