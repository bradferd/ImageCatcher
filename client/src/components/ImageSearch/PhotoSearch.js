import React, { useState } from "react";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import Axios from "axios";

const PhotoSearch = (props) => {
  const [images, setImages] = useState([]);

  const onSearchSubmit = async (term) => {
    const response = await Axios.get("/api/search", {
      params: { query: term },
    });
    setImages(response.data.results);
  };

  return (
    <div className="ui container" style={{ marginTop: "10px" }}>
      <SearchBar onSearchSubmit={onSearchSubmit} />
      <ImageList
        {...props}
        getAllPictureData={props.getAllPictureData}
        images={images}
      />
    </div>
  );
};

export default PhotoSearch;
