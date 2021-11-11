import { Button, Card, Row } from "react-bootstrap";
import React from "react";

import { Link } from "react-router-dom";
import RecipeList from "./RecipeList";

const CuisineCard = ({ cuisine }) => {
  return (
    <div className="card-detail">
      <Card>
        <Card.Img src={cuisine.image} alt={cuisine.name} />
        <Card.Title>{cuisine.name}</Card.Title>
        <Card.Text>{cuisine.description}</Card.Text>
        <Link to={`/${cuisine.slug}/recipes`}>
          <Button>Show Recipes</Button>
        </Link>
      </Card>
    </div>
  );
};

export default CuisineCard;
