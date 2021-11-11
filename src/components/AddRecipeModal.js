import React, { useState } from "react";
import {
  FormControl,
  InputGroup,
  Modal,
  ModalBody,
  Button,
} from "react-bootstrap";
import recipeStore from "../stores/recipeStore";

function AddRecipeModal({ cuisineId }) {
  const [show, setShow] = useState(false);
  const [recipe, setRecipe] = useState({
    name: "",
    image: "",
    description: "",
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (event) =>
    setRecipe({ ...recipe, [event.target.name]: [event.target.value] });

  const handleSubmit = (event) => {
    event.preventDefault();
    recipeStore.createRecipe(recipe, cuisineId);
    handleClose();
  };

  const handleImage = (event) =>
    setRecipe({ ...recipe, image: event.target.files[0] });

  return (
    <div>
      <Button onClick={handleShow}>ADD</Button>
      <Modal show={show} onhide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Recipe</Modal.Title>
        </Modal.Header>
        <ModalBody>
          <form onSubmit={handleSubmit}>
            <InputGroup>
              <InputGroup.Text>Recipe Name</InputGroup.Text>
              <FormControl
                placeholder="Recipe name"
                name="name"
                value={recipe.name}
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
                placeholder="Recipe Image"
              />
            </InputGroup>
            <br />
            <InputGroup>
              <InputGroup.Text>Recipe Description</InputGroup.Text>
              <FormControl
                placeholder="Recipe Description"
                name="description"
                value={recipe.description}
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
export default AddRecipeModal;
