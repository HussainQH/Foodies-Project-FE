import Button from "@restart/ui/esm/Button";
import { observer } from "mobx-react";
import React from "react";
import { Row } from "react-bootstrap";
import cuisineStore from "../stores/cuisineStore";
import AddCuisineModal from "./AddCuisineModal";
import CuisineCard from "./CuisineCard";
import RecipeList from "./RecipeList";

function CuisineList() {
  const cuisineList = cuisineStore.cuisines.map((cuisine) => (
    <CuisineCard cuisine={cuisine} />
  ));

  return (
    <div>
      <AddCuisineModal />
      <div className="grid"> {cuisineList} </div>
    </div>
  );
}

export default observer(CuisineList);
