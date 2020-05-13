import React, { useState, useReducer } from "react";
import Form from "./Form";
import { Redirect } from "react-router-dom";
import axios from "axios";

const NewCollection = (props) => {
  const [newCollection, setNewCollection] = useReducer(
	  (state, newState) => ({ ...state, ...newState}),
	  { name: "", description: "" });
  const [redirectToCollections, setRedirectToCollections] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCollection({ [name] : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`/api/collections`, newCollection);
    setRedirectToCollections(true);
  };

  return redirectToCollections ? (
    <Redirect to="/collections" />
  ) : (
    <div>
      <Form
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
        name={newCollection.name}
        description={newCollection.description}
        inputValue="Create Collection"
      />
    </div>
  );
};

export default NewCollection;
