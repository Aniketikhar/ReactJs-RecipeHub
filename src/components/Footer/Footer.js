import React, { useState, useEffect } from "react";
import "./Footer.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useTheme } from "../../contexts/Theme";

const Footer = () => {
  const [categories, setCategories] = useState([]);
  const { isDarkMode} = useTheme();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/categories.php"
        );
        setCategories(response.data.categories.slice(2, 8));
      } catch (error) {
        console.error("Error fetching categories:", error.message);
      }
    };

    fetchCategories();
  }, []);
  return (
    <div className={isDarkMode? "footer-dark footer":"footer"}>
      <div className="row container mx-auto ">
        <div className="col-12 col-md-5 p-3">
          <div className="f-logo">
            <img
              src="/assets/RecipeHub_transparent.png"
              width={300}
              height={150}
              className="mx-auto"
              alt="logo"
            />
          </div>
          <p className={isDarkMode? "link text-white": "link"}>
            RecipeHub is your ultimate culinary companion, offering a vast
            collection of recipes to inspire your next culinary adventure. Let's
            cook, create, and savor the flavors of life together!
          </p>
        </div>
        <div className="col-12 col-md-7">
          <div className="row text-center text-md-start p-md-4 mt-md-5">
            <div className="col-12 col-md-4">
              <h5>Categories</h5>
              <ul>
                {categories.map((category) => (
                  <Link className="link" to={`/categories/${category.strCategory}`}>
                    <li>{category.strCategory}</li>
                  </Link>
                ))}
              </ul>
            </div>
            <div className="col-12 col-md-4">
              <h5>Legal</h5>
              <ul>
                <li>
                  <Link className="link" to={`/terms`}>Terms</Link>
                </li>
                <li>
                  <Link className="link" to={"/conditions"}>Conditions</Link>
                </li>

                <li>
                  <Link className="link" to={"/copyright"}>CopyRights</Link>
                </li>
              </ul>
            </div>
            <div className="col-12 mx-auto col-md-4">
              <h5>Follow</h5>
              <ul>
                <li>
                  <a className="link"
                    href="https://www.linkedin.com/in/aniket-ikhar-119800294/"
                    target="blank"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a className="link" href="https://github.com/Aniketikhar" target="blank">
                    GitHub
                  </a>
                </li>
                <li>
                  <a className="link"
                    href="https://www.instagram.com/aniket_ikhar/"
                    target="blank"
                  >
                    InstaGram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="d-flex  justify-content-between px-md-5 mx-md-5 ">
        <span className="link">&copy; Made By Aniket | All Rights Reserved</span>
        <span className="me-2">
          <a className="link"
            href="https://www.linkedin.com/in/aniket-ikhar-119800294/"
            target="blank"
          >
            <i className="fa-brands fa-linkedin p-md-3 fs-6 fs-md-4"></i>
          </a>
          <a className="link" href="https://github.com/Aniketikhar" target="blank">
            <i className="fa-brands fa-square-github p-1 p-md-3 fs fs-md-4"></i>
          </a>
          <a className="link" href="https://www.instagram.com/aniket_ikhar/" target="blank">
            <i className="fa-brands fa-square-instagram p-md-3 fs-md-4"></i>
          </a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
