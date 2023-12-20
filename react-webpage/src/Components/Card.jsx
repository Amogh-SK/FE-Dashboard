import React from "react";
import "./Card.css";

export const Card = ({
  imgSrc,
  imgAlt,
  number, 
  title,
  present 
}) => {
  return (
    
    <div className={`card-container ${present === 1 ? 'green' : 'red'}`}>
      {imgSrc && imgAlt && (
        <img src={imgSrc} alt={imgAlt} className="card-img" />
      )}
      {title && <h1 className="card-title">{title}</h1>}
      {number !== undefined && ( 
        <p className="card-description">{number}</p>
      )}
    </div>
  );
};

