import { render, screen } from "@testing-library/react";
import Slider from "../utils/slider";

describe("Slider", () => {
  var sliderImages = ["image1.jpg", "image2.jpg", "image3.jpg"];

  it("renders the slider component", () => {
    render(<Slider SliderImages={sliderImages} />);
    const sliderElement = screen.getByRole("slider");
    expect(sliderElement).toBeInTheDocument();
  });

  var sliderImagesa = ["image1.jpg", "image2.jpg", "image3.jpg"]

  it("renders the correct number of images", () => {
    render(<Slider SliderImages={sliderImagesa} />);
    const sliderImages = screen.getAllByRole("img");
    expect(sliderImages.length).toEqual(3);
  });
});
