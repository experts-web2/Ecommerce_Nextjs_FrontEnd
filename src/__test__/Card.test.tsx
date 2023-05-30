import React from "react"; // Importing React library
import { render, screen } from "@testing-library/react"; // Importing testing libraries
import Card from "../components/home/cards/card"; // Importing the component to test
import "@testing-library/jest-dom/extend-expect"; // Importing library to use expect statements

describe("Card component", () => {
  const mockItem = {
    id: 1,
    title: "Sample Title",
    image: "https://example.com/image.png",
    spotlight: false,
  };

  test("renders spotlight content if item is a spotlight", () => {
    // Defining the test case
    const spotlightItem = {
      id: 2,
      category: "Spotlight Category",
      titleBottom: "Spotlight Title",
      spotlight: true,
    };

    render(<Card item={spotlightItem} />); // Rendering the component with the spotlight itemg
    const spotlightCategory = screen.getByText(spotlightItem.category); // Selecting the spotlight category
    const spotlightTitle = screen.getByText(spotlightItem.titleBottom); // Selecting the spotlight title
    expect(spotlightCategory).toBeInTheDocument(); // Asserting that the spotlight category is present in the component
    expect(spotlightTitle).toBeInTheDocument(); // Asserting that the spotlight title is present in the component
  });
});
