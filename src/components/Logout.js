import React from 'react';
import authStore from '../stores/authStore';
import Button from 'react-bootstrap/Button';
function Logout() {
	const handlesubmit = (event) => {
		event.preventDefault();
		authStore.logOut();
	};
	return (
		<div>
			<Button variant="danger" className="logout" onClick={handlesubmit}>
				Logout
			</Button>
		</div>
	);
}

export default Logout;
