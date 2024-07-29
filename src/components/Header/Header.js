import React, { useEffect, useState } from "react";
import "./Header.css";
import { useTheme } from "../../contexts/Theme";
import axios from "axios";
import { Link } from "react-router-dom";

const Header = () => {
  const [item, setItem] = useState();
  const { isDarkMode } = useTheme();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/lookup.php?i=52917"
        );
        setItem(response.data.meals[0]);
        setLoading(false); // Access the first meal from the meals array
      } catch (error) {
        console.error("Error fetching API:", error);
      }
    };

    fetchApi();
  }, []);

  console.log("hello");

  return (
    // <div className="container my-5 text-black">
    //   <div className={isDarkMode ? "row header-dark" : "row header"}>
    //     <div className="col-md-5 col-lg-7 p-0">
    //       <img src={item.strMealThumb} alt="header" className="img-fluid" />
    //     </div>
    //     <div className="col-md-5">
    //       <div className="content m-lg-5 px-md-5 py-md-3">
    //         <p className="content">
    //           <i className="fa-solid fa-arrow-trend-up mx-2" />
    //           85% would make this again
    //         </p>
    //         <Link className={isDarkMode? "text-white":"text-black"} to={`/recipes/${item.idMeal}`}>
    //         <p className="heading">{item.strMeal}</p>
    //         </Link>
    //         <p className="content">
    //         Delightful combination of creamy custard infused with the sweet flavor of white chocolate,  topped with a satisfyingly crisp caramelized sugar crust.
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="container my-md-5 text-black">
      <div className={`row ${isDarkMode ? "header-dark header" : "header"}`}>
        {loading == true ? (
          <div className="spinner">
            <div className="spin"></div>
          </div>
        ) : (
          <>
            <div className="img-box col-12 col-md-7 p-0">
              {/* <img src="/assets/header-img1.png" alt="header img" className="img-fluid" /> */}
            </div>
            <div className="col-12 col-md-5">
              <div className="content m-3 p-4">
                <p className="">
                  <i className="fa-solid fa-arrow-trend-up mx-2" />
                  85% would make this again
                </p>
                <Link
                  className={`heading ${
                    isDarkMode ? "text-white" : "text-black"
                  }`}
                  to={`/recipes/${item.idMeal}`}
                >
                  <h1>{item.strMeal}</h1>
                </Link>
                <p className="">
                  Delightful combination of creamy custard infused with the
                  sweet flavor of white chocolate, topped with a satisfyingly
                  crisp caramelized sugar crust.
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
