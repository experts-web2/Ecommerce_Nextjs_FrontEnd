import { render, screen, fireEvent } from "@testing-library/react";
import Login from "../pages/user/login";

test("submitting the login form calls the handleSubmit function", () => {
  const handleSubmit = jest.fn();
  render(<Login />);
  const emailInput = screen.getByLabelText("Email Address");
  const passwordInput = screen.getByLabelText("Password");
  const submitButton = screen.getByText("Login");

  fireEvent.change(emailInput, { target: { value: "test@example.com" } });
  fireEvent.change(passwordInput, { target: { value: "password123" } });
  fireEvent.click(submitButton);

  expect(handleSubmit).toHaveBeenCalledTimes(1);
});
