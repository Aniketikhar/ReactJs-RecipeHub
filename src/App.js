import React from 'react';
import { Routes , Route } from 'react-router-dom';
import CategoryRecipes from './pages/CategoryPage/Category';
import Home from './pages/HomePage/Home';
import RecipeDetails from './pages/RecipeDetails/RecipeDetails';
import AllCategories from './pages/AllCategories/AllCategories';
import Searches from './pages/Searches/Searches';
import Terms from './components/Footer/Terms';
import Conditions from './components/Footer/Conditions';
import Copyright from './components/Footer/Copyright';
import './App.css';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/categories" Component={AllCategories} />
        <Route path="/search" Component={Searches} />
        <Route path="/categories/:categoryName" Component={CategoryRecipes} />
        <Route path="/recipes/:recipeId" Component={RecipeDetails} />
        <Route path="/terms" Component={Terms} />
        <Route path="/conditions" Component={Conditions} />
        <Route path="/copyright" Component={Copyright} />
      </Routes>
    </div>
  )
}

export default App
