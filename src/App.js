import { useState, useEffect } from "react";
import "./App.css";
import RecipeCard from "./RecipeCard";


function App() {
  const [query, setQuery] = useState("chicken");
  const [recipes, setRecipes] = useState([]);
  const apiUrl = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=21d73dec&app_key=4908f05cf5316c1cc1b711539d003039`;

  async function getData() {
    let response = await fetch(apiUrl);
    let data = await response.json();
    setRecipes(data.hits);
  }

  useEffect(() => {
    getData()
  },[]);
  return (
    <div>
      <h1>Recipe Finder</h1>
      <form className="form">
        <input
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          className="input"
          placeholder="Search recipes"
          value={query}
        />
        <button
          onClick={(e) => (
            e.preventDefault(),
            getData(),
            setQuery(""))
        }
          type="submit"
          className="btn"
        >Search</button>
      </form>
 
      <div className="container">
        {recipes.length > 0 &&
          recipes.map((recipe) => (
            <RecipeCard
              calories={recipe.recipe.calories}
              type={recipe.recipe.cuisineType}
              image={recipe.recipe.image}
              name={recipe.recipe.label}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
