import React from "react";

import { Card } from "react-bootstrap";

const RecipeCard = ({ recipe }) => {
  return (
    <div>
      <Card className="col-lg-4 mx-auto">
        <Card.Img src={recipe.image} alt={recipe.name} />
        <Card.Title>{recipe.name}</Card.Title>
        <Card.Text>{recipe.description}</Card.Text>
      </Card>
    </div>
  );
};

export default RecipeCard;
