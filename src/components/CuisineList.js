import { observer } from "mobx-react";
import React from "react";
import cuisineStore from "../stores/cuisineStore";
import CuisineCard from "./CuisineCard";

function CuisineList() {
  const cuisineList = cuisineStore.cuisines.map((cuisine) => (
    <CuisineCard cuisine={cuisine} />
  ));

  return <div>{cuisineList}</div>;
}

export default observer(CuisineList);
