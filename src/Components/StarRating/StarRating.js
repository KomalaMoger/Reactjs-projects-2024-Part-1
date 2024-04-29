import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./StarRating.css";
export default function StarRating({ noOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const handleClick = (getCurrentIndex) => {
    console.log(getCurrentIndex);
    setRating(getCurrentIndex);
  };
  const handleMouseEnter = (getCurrentIndex) => {
    console.log(getCurrentIndex);
    setHover(getCurrentIndex);
  };
  const handleMouseLeave = () => {
    setHover(rating);
  };
  return (
    <div className="star-rating">
      {[...Array(noOfStars)].map((_, index) => {
        // passsing index from 1
        index += 1;
        return (
          <FaStar
            key={index}
            className={index <= (hover || rating) ? "active" : "inactive"}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            size={30}
          />
        );
      })}
    </div>
  );
}
