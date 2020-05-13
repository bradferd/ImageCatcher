import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "../Modal";
import { Link, Redirect } from "react-router-dom";

const CollectionDelete = ({ match, history}) => {
  const [collection, setCollection] = useState("Loading...");
  const [toCollections, setToCollections] = useState(false);

  const id = match.params.collectionId;
  const url = `/api/collections/${id}`;

  useEffect(() => {
    axios.get(url).then((res) => setCollection(res.data));
  }, [url, collection]);

  const handleDelete = () => {
    axios.delete(url).then(setToCollections(!toCollections));
  };

  const renderActions = () => {
    return (
      <>
        <button onClick={() => handleDelete(id)} className="ui button negative">
          Delete
        </button>
        <Link to={`/collections/${id}`} className="ui button">
          Cancel
        </Link>
      </>
    );
  };

  if (toCollections) {
    return <Redirect to="/collections" />;
  }
  return (
    <div>
      <Modal
        title="Delete Collection"
        content={`Are you sure you want to delete ${collection.name}?`}
        actions={renderActions()}
        onDismiss={() => history.goBack()}
      />
    </div>
  );
};

export default CollectionDelete;
