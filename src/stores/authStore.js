import { makeAutoObservable } from "mobx";
import api from "./api";
import decode from "jwt-decode";

class AuthStore {
  user = null;

  constructor() {
    makeAutoObservable(this);
  }

  setUser = (token) => {
    localStorage.setItem("myToken", token);
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
    // REVIEW: Remove the console log if you're done with it
    console.log(decode(token));
    this.user = decode(token);
  };

  signUp = async (userData) => {
    try {
      // REVIEW: Remove the console logs if you're done with it
      console.log(userData);
      const res = await api.post("/signup", userData);
      // REVIEW: You dont need to use localStorage here, you're already using it in setUser, remove this line
      localStorage.setItem("myToken", res.data.token);
      console.log(res.data.token);
      this.setUser(res.data.token);
    } catch (error) {
      alert(error);
    }
  };

  signIn = async (userData) => {
    try {
      const res = await api.post("/signin", userData);
      // REVIEW: You dont need to use localStorage here, you're already using it in setUser, remove this line
      localStorage.setItem("myToken", res.data.token);
      this.setUser(res.data.token);
    } catch (error) {
      alert(error);
    }
  };

  logOut = () => {
    delete api.defaults.headers.common.Authorization;
    localStorage.removeItem("myToken");
    this.user = null;
  };

  checkForToken = () => {
    this.user = null;
    const token = localStorage.getItem("myToken");
    if (token) {
      const currentTime = Date.now(); // give us the current time
      let tempUser = decode(token);
      if (tempUser.exp >= currentTime) {
        this.setUser(token);
      } else {
        this.logOut();
      }
    }
  };
}
const authStore = new AuthStore();
authStore.checkForToken();
export default authStore;
