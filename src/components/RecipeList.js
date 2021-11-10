import { observer } from "mobx-react";
import React from "react";
import { Row } from "react-bootstrap";
import recipeStore from "../stores/recipeStore";

import RecipeCard from "./RecipeCard";

function RecipeList() {
  const recipeList = recipeStore.recipes.map((recipe) => (
    <RecipeCard recipe={recipe} />
  ));

  return (
    <div>
      <Row> {recipeList} </Row>
    </div>
  );
}

export default observer(RecipeList);
