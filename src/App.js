import "./App.css";
import CuisineList from "./components/CuisineList";
import RecipeList from "./components/RecipeList";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import RecipeCard from "./components/RecipeCard";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<CuisineList />} />
        <Route path="/:cuisineSlug/recipes" element={<RecipeList />}></Route>
        <Route
          path="/:cuisineSlug/recipes/:recipesSlug"
          element={<RecipeCard />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
