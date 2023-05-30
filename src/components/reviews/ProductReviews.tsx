import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CommentStep from "@/utils/commonstep";
import ReactStars from "react-stars";
import { LinearProgress } from "@mui/material";
import RatingStep from "@/utils/ratingstep";
import Rating from "@/utils/stars";

const ProductReviews = () => {
  const [open, setOpen] = useState(false);
  const [ratingModelOpen, setRatingModelOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [allRatings, setAllRatings] = useState([4.5, 1, 0, 0, 1]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleRatingModelOpen = () => setRatingModelOpen(true);
  const handleRatingModelClose = () => setRatingModelOpen(false);

  const handleNext = (data: any) => {
    setFormData({ ...formData, ...data });
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const handleSubmit = (data: any) => {
    setFormData({ ...formData, ...data });
    handleClose();
  };

  const steps = [
    <RatingStep onNext={handleNext} />,
    <CommentStep onBack={handleBack} onSubmit={handleSubmit} />,
  ];

  return (
    <>
      <div className="flex row items-center content-center justify-between mt-4 mb-4">
        <div
          className="flex row items-center content-center justify-center"
          onClick={handleRatingModelOpen}
        >
          <Rating rating={3.5} /> <div className="ml-3">1 Review </div>
          <div className="ml-3">^</div>
        </div>
        <Modal
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "60%",
            height: "10%",
            zIndex: 1,
          }}
          sx={style}
          open={ratingModelOpen}
          onClose={handleRatingModelClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            className="p-4 rounded-lg shadow-lg"
            sx={{ width: "500px", outline: "none" }}
          >
            <Typography id="modal-modal-description">Average Rating</Typography>
            {allRatings.map((rating, index) => {
              return (
                <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
                  <ReactStars
                    count={5}
                    size={24}
                    color2={"#ffd700"}
                    value={rating}
                    edit={false}
                  />
                  <LinearProgress
                    variant="determinate"
                    value={(rating / 5) * 100}
                    sx={{ ml: 1, width: "100%" }}
                  />
                </Box>
              );
            })}
          </Box>
        </Modal>

        <div>
          <button
            onClick={handleOpen}
            className="
            bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          >
            Write a Review
          </button>
          <Modal
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
            sx={style}
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            hideBackdrop={false}
          >
            <Box className="p-4" sx={{ width: "500px", outline: "none" }}>
              <Typography id="modal-modal-description">
                {steps[step]}
              </Typography>
            </Box>
          </Modal>
        </div>
      </div>
      <div className="flex flex row  mt-3 mb-3">
        <Card
          sx={{ minWidth: 275, width: 275 }}
          className="
          mr-4
          bg-gray-100
          border-2
          border-gray-300
          shadow-sm
          rounded-lg
        "
        >
          <CardContent>
            <Typography
              sx={{ fontSize: 14, color: "white" }}
              color="white"
              gutterBottom
            >
              Khalid K.
            </Typography>
            <Typography variant="h5" component="div">
              <Rating rating={3.5} />
            </Typography>
            <Typography sx={{ mb: 1.5 }} className="mt-1 mb-1">
              The order came on time and the sandal ordered fitted very well.
              The product was also reasonably good in quality
            </Typography>
            <Typography variant="body2" className="mt-1 mb-1">
              Item type:
              <br />
            </Typography>
            <Typography variant="body2" className="mt-1 mb-1">
              9/11
              <br />
            </Typography>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default ProductReviews;
