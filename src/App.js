import "./App.css";

import CuisineList from "./components/CuisineList";

import NavBar from "./components/NavBar";
function App() {
  return (
    <div className="App">
      <NavBar />
      <CuisineList />
      <h1>Test</h1>
    </div>
  );
}

export default App;
