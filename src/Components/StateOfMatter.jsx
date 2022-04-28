import React from "react";

export default function StateOfMatter({ name, image, ad1, ad2, ad3 }) {
  return (
    <div className="State">
      <div className="center">
        <h1 className="name">{name}</h1>
      </div>

      <div className="center">
        <img src={image} className="image" alt="" />
      </div>

      <div className="facts">
        <div className="center">
          <h2>{ad1}</h2>
        </div>
        <div className="center">
          <h2>{ad2}</h2>
        </div>
        <div className="center">
          <h2>{ad3}</h2>
        </div>
      </div>
    </div>
  );
}
