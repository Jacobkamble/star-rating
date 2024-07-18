import React, { useState } from "react";

interface StarRatingProps {
  rating: number;
  onClick: (i: number) => {};
  size: number;
}

const StarRating: React.FC<StarRatingProps> = ({
  rating = 0,
  onClick = () => {},
  size = 5,
}) => {
  const [hoverRating, setHoverRating] = useState(0);

  const handleHover = (hoverRating: number) => {
    setHoverRating(hoverRating);
  };

  return (
    <>
      <div>
        {Array.from({ length: size }).map((_, i) => {
          const starValue = i + 1;
          let starClass = "";
          if (rating >= starValue) {
            starClass = starClass + " active";
          } else if (hoverRating >= starValue) {
            starClass = starClass + " hover";
          }
          return (
            <span
              className={starClass}
              onMouseLeave={() => setHoverRating(0)}
              onMouseEnter={() => handleHover(starValue)}
              onClick={() => onClick(starValue)}
              style={{ padding: "2px", fontSize: "25px" }}
              key={i}
            >
              {" "}
              &#9733;
            </span>
          );
        })}
      </div>
    </>
  );
};

export default StarRating;
