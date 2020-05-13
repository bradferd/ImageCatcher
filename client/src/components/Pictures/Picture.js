import React from "react";
import { Link } from "react-router-dom";

const Picture = ({ collectionId, id, src, description }) => {
  return (
    <div className="column">
      <Link to={`/collections/${collectionId}/pics/${id}`}>
        <img
          className="ui medium rounded bordered image"
          src={src}
          alt={description}
        />
      </Link>
      <Link
        className="circular ui icon button"
        to={`/collections/${collectionId}/pics/${id}/delete`}
        style={{ marginTop: "2px", marginBottom: "2px" }}
      >
        <i className="trash alternate icon" />
      </Link>
    </div>
  );
};

export default Picture;
