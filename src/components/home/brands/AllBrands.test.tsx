import React from "react";
import { render } from "@testing-library/react";
import Brands from "./brands";
import "@testing-library/jest-dom/extend-expect";

test("renders our brands section heading", () => {
  const { getByText } = render(<Brands />);
  const headingElement = getByText(/our brands/i);
  expect(headingElement).toBeInTheDocument();
});

test("renders all brands images", () => {
  const { getAllByRole } = render(<Brands />);
  const images = getAllByRole("img");
  expect(images.length).toBe(3);
});

test("renders spotlight section heading", () => {
  const { getByText } = render(<Brands />);
  const headingElement = getByText(/#spotlight/i);
  expect(headingElement).toBeInTheDocument();
  expect(headingElement).toBeVisible();
});

test("renders spotlight cards", () => {
  const { getAllByTestId } = render(<Brands />);
  const cards = getAllByTestId("spotlight-card");
  expect(cards.length).toBeGreaterThan(0);
});
