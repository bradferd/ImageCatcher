import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import Modal from "../Modal";

const ImageCard = ({ image, match, getAllPictureData }) => {
  const [spans, setSpans] = useState(0);
  const imageRef = useRef(null);

  const url = `/api/collections/${match.params.collectionId}/pics`;

  useEffect(() => {
    imageRef.current.addEventListener("load", makeSpans);
  }, [spans]);

  const makeSpans = () => {
    const height = imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);
    setSpans(spans);
  };

  const addToCollection = async () => {
    await axios.post(url, {
      description: image.alt_description,
      imgSrc: image.urls.regular,
      collectionId: match.params.collectionId,
    });
    getAllPictureData();
  };

  const { description, urls } = image;

  return (
    <div style={{ gridRowEnd: `span ${spans}` }}>
      <img
        className="ui rounded image"
        ref={imageRef}
        alt={description}
        src={urls.regular}
        onClick={() => {
          return (
            <div>
              <Modal
                content={() => {
                  return (
                    <img 
                      src={urls.regular}
                      alt={description}
                      ref={imageRef}
                    />
                  )
                }}
              />
            </div>
          )
        }}
      />
      <button
        className="ui labeled icon button primary"
        onClick={addToCollection}
      >
        <i className="plus icon" />
        Add to Collection
      </button>
    </div>
  );
};

export default ImageCard;
