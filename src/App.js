import './App.css';
import authStore from './stores/authStore';

import NavBar from './components/NavBar';
import userEvent from '@testing-library/user-event';
function App() {
	return (
		<div className="App">
			<NavBar />
			<h1>{authStore.user ? authStore.user.username : 'NO USER'}</h1>
		</div>
	);
}

export default App;
