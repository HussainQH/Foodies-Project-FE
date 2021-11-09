import { makeAutoObservable } from "mobx";

class RecipeStore {
  constructor() {
    makeAutoObservable(this);
  }

  recipes = [];
}

const recipeStore = new RecipeStore();
recipeStore.fetchRecipes();
export default recipeStore;
