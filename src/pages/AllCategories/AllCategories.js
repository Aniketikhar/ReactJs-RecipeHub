import React , { useState , useEffect} from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const AllCategories = () => {
    const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/categories.php"
        );
        setCategories(response.data.categories);
      } catch (error) {
        console.error("Error fetching categories:", error.message);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="header-category  container">
        <div className="category-content   ">
          <img src="/assets/pexels-ella-olsson-572949-1640774.jpg" className='img-fluid' alt="banner" />
          <h2 className='mt-3'>
           All Categories
          </h2>
          {/* <p>{categoryDescription}</p> */}
        </div>
      </div>
      <div className="categories container row row-cols-4 mx-auto mt-5">
        {
            categories.map((category) => (
              <Link to={`/categories/${category.strCategory}`}>
                <div className="card border-0 text-center">
                  <img
                    src={category.strCategoryThumb}
                    alt=""
                    className="img-fluid mx-auto"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{category.strCategory}</h5>
                  </div>
                </div>
              </Link>
            ))
        }
      </div>
      <Footer />
    </div>
  )
}

export default AllCategories
