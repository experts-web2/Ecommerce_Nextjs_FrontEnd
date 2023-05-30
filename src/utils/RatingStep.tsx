import { useState } from "react";
import Typography from "@mui/material/Typography";
import ReactStars from "react-stars";

const RatingStep = ({ onNext }: any) => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (newRating: any) => {
    setRating(newRating);
  };

  const handleNextClick = () => {
    onNext({ rating });
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="my-4">
        <Typography variant="h6" component="h2">
          Please rate your experience
        </Typography>
        <ReactStars
          count={5}
          size={24}
          color2={"#ffd700"}
          value={rating}
          edit={true}
          onChange={handleRatingChange}
        />
        <div className="text-center">{rating}</div>
      </div>
      <button
        disabled={rating === 0}
        className="bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded"
        onClick={handleNextClick}
      >
        Next
      </button>
    </div>
  );
};

export default RatingStep;
