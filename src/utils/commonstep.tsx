import { useState } from "react";
import Typography from "@mui/material/Typography";
const CommentStep = ({ onBack, onSubmit }:any) => {
    const [comment, setComment] = useState("");
  
    const handleCommentChange = (event:any) => {
      setComment(event.target.value);
    };
  
    const handleBackClick = () => {
      onBack();
    };
  
    const handleSubmitClick = () => {
      onSubmit({ comment });
    };
  
    return (
      <div className="flex flex-col items-center justify-center bg-white">
        <div className="my-4  bg-white">
          <Typography variant="h6" component="h2" className="bg-white text-black">
            Please leave a comment
          </Typography>
          <textarea
            value={comment}
            onChange={handleCommentChange}
            className="w-full  bg-white text-black"
          ></textarea>
        </div>
        <div className="flex justify-between w-full  bg-white">
          <button
            className="bg-blue-500 hover:bg-blue-700  font-bold py-2 px-4 rounded mr-4"
            onClick={handleBackClick}
          >
            Back
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700  font-bold py-2 px-4 rounded"
            onClick={handleSubmitClick}
          >
            Submit
          </button>
        </div>
      </div>
    );
  };
  

  export default CommentStep