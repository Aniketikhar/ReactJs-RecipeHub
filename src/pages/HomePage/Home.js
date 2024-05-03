import React from 'react';
import Navbar from '../../components/Navbar/Navbar'
import Header from "../../components/Header/Header";
import Subscription from "../../components/Subscription/Subscription";
import Varieties from "../../components/Varieties/Varieties";
import Categories from "../../components/Categories/Categories";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      
      <Navbar />
      <Header />
      <Varieties />
      <Categories />
      <Subscription />
      <Footer />
    
    </div>
  )
}

export default Home
