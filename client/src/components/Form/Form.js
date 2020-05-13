import React from "react";

const Form = ({
  handleSubmit,
  handleInputChange,
  name,
  description,
  inputValue,
}) => {
  return (
    <div className="ui container" style={{ marginTop: "30px" }}>
      <div className="ui middle aligned center aligned grid">
        <div className="column">
          <form onSubmit={handleSubmit} className="ui large form">
            <div className="field">
              <label htmlFor="collection-name">Collection Name</label>
              <input
                onChange={handleInputChange}
                type="text"
                id="collection-name"
                placeholder="Enter a name for this collection..."
                name="name"
                value={name}
                autoComplete="off"
              />
            </div>
            <div className="field">
              <label htmlFor="collection-description">
                Collection Description
              </label>
              <input
                onChange={handleInputChange}
                type="text"
                id="collection-description"
                name="description"
                value={description}
                autoComplete="off"
              />
            </div>
            <input
              type="submit"
              value={inputValue}
              className="ui button primary"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form