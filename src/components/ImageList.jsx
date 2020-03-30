import React from "react";

const ImageList = props => {
  return (
    <div>
      <img src={props.photo.urls.small} alt={props.photo.alt_description} />
    </div>
  );
};

export default ImageList;
