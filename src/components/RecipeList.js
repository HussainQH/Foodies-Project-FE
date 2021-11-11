import { observer } from "mobx-react";
import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

import cuisineStore from "../stores/cuisineStore";

import recipeStore from "../stores/recipeStore";
import AddRecipeModal from "./AddRecipeModal";

import RecipeCard from "./RecipeCard";

function RecipeList() {
  const { cuisineSlug } = useParams();

  const foundCuisine = cuisineStore.cuisines.find(
    (cuisine) => cuisine.slug === cuisineSlug
  );

  if (!foundCuisine) return <Link to="/"></Link>;

  const recipeList = recipeStore.recipes
    .filter((recipe) => recipe.cuisine === foundCuisine._id)
    .map((recipe) => <RecipeCard recipe={recipe} />);

  return (
    <div>
      {recipeList} <AddRecipeModal cuisineId={foundCuisine._id} />
    </div>
  );
}

export default observer(RecipeList);
