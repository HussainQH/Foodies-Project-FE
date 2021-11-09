import { makeAutoObservable } from "mobx";
import api from "./api";
import FormData from "form-data";

class CuisineStore {
  constructor() {
    makeAutoObservable(this);
  }

  cuisines = [];

  createCuisine = async (newCuisine) => {
    try {
      const formData = new FormData();
      for (const key in newCuisine) formData.append(key, newCuisine[key]);
      const res = await api.post("/cuisines", formData);
      this.cuisines.push(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  fetchCuisine = async () => {
    try {
      const response = await api.get("/cuisines");
      this.cuisines = response.data;
    } catch (error) {
      console.log(error);
    }
  };
}

const cuisineStore = new CuisineStore();
cuisineStore.fetchCuisine();
export default cuisineStore;
