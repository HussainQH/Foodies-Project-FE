import React, { useState } from "react";
import {
  FormControl,
  InputGroup,
  Modal,
  ModalBody,
  Button,
} from "react-bootstrap";
import cuisineStore from "../stores/cuisineStore";

function AddCuisineModal() {
  const [show, setShow] = useState(false);
  const [cuisine, setCuisine] = useState({
    name: "",
    image: "",
    description: "",
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (event) =>
    setCuisine({ ...cuisine, [event.target.name]: [event.target.value] });

  const handleSubmit = (event) => {
    event.preventDefault();
    cuisineStore.createCuisine(cuisine);
    handleClose();
  };

  const handleImage = (event) =>
    setCuisine({ ...cuisine, image: event.target.files[0] });

  return (
    <div>
      <button className="active" onClick={handleShow}>
        Add Your Favorite Cuisine
      </button>

      <Modal show={show} onhide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Cuisine</Modal.Title>
        </Modal.Header>
        <ModalBody>
          <form onSubmit={handleSubmit}>
            <InputGroup>
              <InputGroup.Text>Cuisine Name</InputGroup.Text>
              <FormControl
                placeholder="Cuisine name"
                name="name"
                value={cuisine.name}
                type="text"
                onChange={handleChange}
              />
            </InputGroup>
            <br />
            <InputGroup>
              <InputGroup.Text>Image</InputGroup.Text>
              <FormControl
                type="file"
                onChange={handleImage}
                placeholder="Cuisine Image"
              />
            </InputGroup>
            <br />
            <InputGroup>
              <InputGroup.Text>Cuisine Description</InputGroup.Text>
              <FormControl
                placeholder="Cuisine Description"
                name="description"
                value={cuisine.description}
                type="text"
                onChange={handleChange}
              />
            </InputGroup>
            <br />
            <Button type="submit">Submit</Button>
          </form>
        </ModalBody>
      </Modal>
    </div>
  );
}
export default AddCuisineModal;
