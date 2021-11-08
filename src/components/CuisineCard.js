import React from "react";

import { Card } from "react-bootstrap";

const CuisineCard = ({ cuisine }) => {
  return (
    <div>
      <Card className="col-lg-4 mx-auto">
        <Card.Img src={cuisine.image} alt={cuisine.name} />
        <Card.Title>{cuisine.name}</Card.Title>
        <Card.Text>{cuisine.description}</Card.Text>
      </Card>
    </div>
  );
};

export default CuisineCard;
