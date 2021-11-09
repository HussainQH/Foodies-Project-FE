import './App.css';
import CuisineList from './components/CuisineList';
import NavBar from './components/NavBar';
import { Routes, Route } from 'react-router-dom';
import Signin from './components/Signin';
import Signup from './components/Signup';
import { Navbar } from 'react-bootstrap';
function App() {
	return (
		<div className="App">
			<NavBar />
			<Routes>
				<Route path="/signin" element={<Signin />} />
				<Route path="/signup" element={<Signup />} />
			</Routes>
			<CuisineList />
		</div>
	);
}

export default App;
