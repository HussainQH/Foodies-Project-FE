import "./App.css";

import CuisineList from "./components/CuisineList";

import NavBar from "./components/NavBar";

import authStore from "./stores/authStore";

import userEvent from "@testing-library/user-event";

function App() {
  return (
    <div className="App">
      <NavBar />

      <CuisineList />
      <h1>Test</h1>

      <h1>{authStore.user ? authStore.user.username : "NO USER"}</h1>
    </div>
  );
}

// REVIEW: This needs to be observer since you're checking the value of authStore.user
export default App;
