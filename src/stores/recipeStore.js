import { makeAutoObservable } from "mobx";
import api from "./api";
import FormData from "form-data";

class RecipeStore {
  constructor() {
    makeAutoObservable(this);
  }

  recipes = [];

  createRecipe = async (newRecipe, cuisineId) => {
    try {
      const formData = new FormData();
      for (const key in newRecipe) formData.append(key, newRecipe[key]);
      const res = await api.post(`/cuisines/${cuisineId}/recipes`, formData);
      this.recipes.push(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  fetchRecipes = async () => {
    try {
      const response = await api.get("/recipes");
      this.recipes = response.data;
    } catch (error) {
      console.log(error);
    }
  };
}

const recipeStore = new RecipeStore();
recipeStore.fetchRecipes();
export default recipeStore;
