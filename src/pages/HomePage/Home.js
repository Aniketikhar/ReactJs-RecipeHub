import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Subscription from "../../components/Subscription/Subscription";
import Varieties from "../../components/Varieties/Varieties";
import Categories from "../../components/Categories/Categories";
import Footer from "../../components/Footer/Footer";
import './Home.css';
import { useTheme } from "../../contexts/Theme";


const Home = () => {
  const { isDarkMode } = useTheme();
  window.scrollTo(0 , 0);

  return (
  <div className={ isDarkMode? "bg-dark" : " " }>
    
        <Navbar />
        <Header />
        <Varieties />
        <Categories />
        <Subscription />
        <Footer />
  </div>
  );
};

export default Home;
