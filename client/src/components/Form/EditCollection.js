import React, { useReducer, useState, useEffect } from "react";
import Form from "./Form";
import { Redirect } from "react-router-dom";
import axios from "axios";

const EditCollection = ({ match }) => {
  const [collection, setCollection] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    { name: "", description: "" }
  );
  const [redirect, setRedirect] = useState(false);
  const url = `/api/collections/${match.params.collectionId}`;
  
  useEffect(() => {
	  axios.get(url)
	  .then(res => setCollection(res.data))
  }, [url])

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCollection({ [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(url, collection);
    setRedirect(true);
  };

  if (redirect) {
    return (
      <Redirect to={`/collections/${match.params.collectionId}`} />
    );
  }
  return (
    <div>
      <Form
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
        name={collection.name}
        description={collection.description}
        inputValue="Edit Collection"
      />
    </div>
  );
};

export default EditCollection