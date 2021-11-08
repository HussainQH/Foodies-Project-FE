import React from 'react';
import { useState } from 'react';
import authStore from '../stores/authStore';
import { Modal, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function SignInModal() {
	const [ user, setUser ] = useState({
		username: '',
		password: ''
	});

	const handleChange = (event) => {
		setUser({ ...user, [event.target.name]: event.target.value });
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		authStore.signIn(user);
	};

	const [ show, setShow ] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<div>
			<Button variant="light" onClick={handleShow}>
				Signin
			</Button>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Signin</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form onSubmit={handleSubmit}>
						<Form.Group className="mb-3" controlId="formBasicUsername">
							<Form.Label>Username</Form.Label>
							<Form.Control
								type="username"
								name="username"
								placeholder="Enter username"
								onChange={handleChange}
							/>
							<Form.Text className="text-muted" />
						</Form.Group>
						<Form.Group className="mb-3" controlId="formBasicPassword">
							<Form.Label>Password</Form.Label>
							<Form.Control
								type="password"
								name="password"
								placeholder="Password"
								onChange={handleChange}
							/>
						</Form.Group>
						<Form.Group className="mb-3" controlId="formBasicCheckbox" />
						<Button variant="primary" type="submit">
							Submit
						</Button>
					</Form>
				</Modal.Body>
			</Modal>
		</div>
	);
}

export default SignInModal;
