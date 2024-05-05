import React, { useState, useEffect } from "react";
import "./Footer.css";
import axios from "axios";
import { Link } from "react-router-dom";

const Footer = () => {
  const [categories, setCategories] = useState([]);

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
    <div className="footer">
      <div className="row container mx-auto ">
        <div className="col-5 p-3">
          <div className="f-logo">
            <img
              src="/assets/RecipeHub_transparent.png"
              width={300}
              height={150}
              alt="logo"
            />
          </div>
          <p className="link">
            RecipeHub is your ultimate culinary companion, offering a vast
            collection of recipes to inspire your next culinary adventure. Let's
            cook, create, and savor the flavors of life together!
          </p>
        </div>
        <div className="col-7">
          <div className="row p-5 mt-2">
            <div className="col-4">
              <h4>Categories</h4>
              <ul>
                {categories.map((category) => (
                  <Link className="link" to={`/categories/${category.strCategory}`}>
                    <li>{category.strCategory}</li>
                  </Link>
                ))}
              </ul>
            </div>
            <div className="col-4">
              <h4>Legal</h4>
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
            <div className="col-4">
              <h4>Follow</h4>
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
      <div className="d-flex  justify-content-between px-5 mx-5">
        <span className="link">&copy; Made By Aniket | All Rights Reserved</span>
        <span>
          <a className="link"
            href="https://www.linkedin.com/in/aniket-ikhar-119800294/"
            target="blank"
          >
            <i className="fa-brands fa-linkedin p-3 fs-4"></i>
          </a>
          <a className="link" href="https://github.com/Aniketikhar" target="blank">
            <i class="fa-brands fa-square-github p-3 fs-4"></i>
          </a>
          <a className="link" href="https://www.instagram.com/aniket_ikhar/" target="blank">
            <i class="fa-brands fa-square-instagram p-3 fs-4"></i>
          </a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
