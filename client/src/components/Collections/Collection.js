import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import PhotoSearch from "../ImageSearch/PhotoSearch";
import Pictures from "../Pictures/Pictures";

const Collection = (props) => {
  const [showSearch, setShowSearch] = useState(false);
  const [collection, setCollection] = useState([]);

  const url = `/api/collections/${props.match.params.collectionId}`;

  useEffect(() => {
    axios.get(url).then((res) => setCollection(res.data));
  }, [url]);

  const getAllPictureData = async () => {
	  let pictures = await axios.get(`${url}/pics`)
	  return pictures.data
  };

  return (
    <div>
      <div>
        <div
          id="collectionHeader"
          className="ui vertical inverted masthead center aligned segment"
          style={{ marginBottom: "0" }}
        >
          <h1>{collection.name}</h1>
          <p>{collection.description}</p>
          <Link
            to={`/collections/${props.match.params.collectionId}/delete`}
            className="mini ui button primary"
          >
            Delete Collection
          </Link>
          <Link
            to={`/collections/${props.match.params.collectionId}/edit`}
            className="mini ui button primary"
          >
            Edit Collection
          </Link>
          {showSearch ? (
            <button
              className="mini ui button primary"
              onClick={() => setShowSearch(!showSearch)}
            >
              Hide Search
            </button>
          ) : (
            <button
              className="mini ui button primary"
              onClick={() => setShowSearch(!showSearch)}
            >
              Add pictures
            </button>
          )}
        </div>
        <div
          className="ui segment"
          id="collectionLarge"
          style={{ marginTop: "0" }}
        >
          {showSearch ? (
            <div className="ui two column very relaxed grid">
              <div className="column">
                <div className="ui container center aligned">
                  <PhotoSearch
                    getAllPictureData={getAllPictureData}
                    {...props}
                  />
                </div>
              </div>
              <div className="column">
                <div className="ui container center aligned">
                  <h3>My Pictures</h3>
                  <Pictures />
                </div>
              </div>
            </div>
          ) : (
            <div className="column">
              <div className="ui container center aligned">
                <h3>My Pictures</h3>
                <Pictures collectionId={props.match.params.collectionId} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Collection;
