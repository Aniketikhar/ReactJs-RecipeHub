import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Subscription from "../../components/Subscription/Subscription";
import Varieties from "../../components/Varieties/Varieties";
import Categories from "../../components/Categories/Categories";
import Footer from "../../components/Footer/Footer";
import './Home.css';
import { useTheme } from "../../contexts/Theme";

import Shepherd from 'shepherd.js';
import '../../shepherd.css';


const Home = () => {
  const { isDarkMode } = useTheme();

  window.scrollTo(0 , 0);

  useEffect(() => {

    // // Function to clear the tour flag from localStorage
    // const clearTourFlag = () => {
    //   localStorage.removeItem('hasShownTour');
    // };

    // // Add event listener for the beforeunload event
    // window.addEventListener('beforeunload', clearTourFlag);

    // const hasShownTour = localStorage.getItem('hasShownTour');

    // if (!hasShownTour) {
    const tour = new Shepherd.Tour({
      defaultStepOptions: {
        cancelIcon: {
          enabled: true
        },
        classes: "shepherd-theme-arrows  p-3 ",
        scrollTo: { behavior: 'smooth', block: 'center' }
      }
    });

    tour.addStep({
      id: 'step-1',
      title: 'Welcome to our RecipeHub!',
      text: " RecipeHub is your ultimate culinary companion, offering a vastcollection of recipes to inspire your next culinary adventure. Let's cook, create, and savor the flavors of life together!",
      attachTo: {
        element: '',
        on: 'center'
      },
      buttons: [
        {
          text: 'Exit',
          action: tour.cancel
        },
        {
          text: 'Next',
          action: tour.next
        }
      ]
    });

    tour.addStep({
      id: 'step-2',
      text: 'This is the search bar. Use it to find your favorite recipes.',
      attachTo: {
        element: '.search-box',
        on: 'bottom'
      },
      buttons: [
        {
          text: 'Back',
          action: tour.back
        },
        {
          text: 'Next',
          action: tour.next
        }
      ]
    });
    tour.addStep({
      id: 'step-3',
      text: 'This button allows you to switch between light and dark themes. Customize your viewing experience to match your preference or the time of day. Give it a try to see the site in a whole new light (or dark)!',
      attachTo: {
        element: '.switch',
        on: 'bottom'
      },
      buttons: [
        {
          text: 'Back',
          action: tour.back
        },
        {
          text: 'Next',
          action: tour.next
        }
      ]
    });
    tour.addStep({
      id: 'step-4',
      text: "This button will take you to our Categories section, where you can explore a variety of recipe categories. Whether you're in the mood for desserts, main courses, or appetizers, you'll find the perfect recipe to satisfy your cravings. Click here to discover more!",
      attachTo: {
        element: '.all-cate',
        on: 'bottom'
      },
      buttons: [

        {
          text: 'Back',
          action: tour.back
        },
        {
          text: 'Next',
          action: tour.next
        }
      ]
    });
    tour.addStep({
      id: 'step-5',
      text: "This button provides information about the developer behind this site. Learn more about their journey, skills, and the passion that drove the creation of this recipe platform. Click here to get to know the developer better!",
      attachTo: {
        element: '.about',
        on: 'bottom'
      },
      buttons: [

        {
          text: 'Back',
          action: tour.back
        },
        {
          text: 'Next',
          action: tour.next
        }
      ]
    });
    tour.addStep({
      id: 'step-6',
      text: 'Check out the "Super Delicious" recipe, one of our most popular dishes!',
      attachTo: {
        element: '.sup-del',
        on: 'bottom'
      },
      buttons: [
        {
          text: 'Back',
          action: tour.back
        },
        {
          text: 'Next',
          action: tour.next
        }
      ]
    });

    tour.addStep({
      id: 'step-4',
      text: 'Here are our popular categories. Explore these categories to find your next favorite dish.',
      attachTo: {
        element: '.cate',
        on: 'bottom'
      },
      buttons: [
        {
          text: 'Back',
          action: tour.back
        },
        {
          text: 'Finish',
          action: tour.complete
        }
      ]
    });

    tour.start();

     // Set the flag to indicate the tour has been shown
    //  localStorage.setItem('hasShownTour', 'true');
    // }
  }, []);

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
