import React from "react";
import "./Card.css";

export const Card = ({
  imgSrc,
  imgAlt,
  number, 
  title,
  present // Add a new prop called present
}) => {
  return (
    // Use the present prop to conditionally apply a CSS class to the card container element
    <div className={`card-container ${present === 1 ? 'green' : 'red'}`}>
      {imgSrc && imgAlt && (
        <img src={imgSrc} alt={imgAlt} className="card-img" />
      )}
      {title && <h1 className="card-title">{title}</h1>}
      {number !== undefined && ( // Use !== undefined to check if number is provided
        <p className="card-description">{number}</p>
      )}
    </div>
  );
};

