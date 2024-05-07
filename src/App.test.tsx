import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import App from "./App";

//The testing library is short but ensures the website was created correctly.
test("renders cheese buttons", () => {
  const { getByText } = render(<App />);
  const bavariaBluButton = getByText("Bavaria Blu");
  const adelostButton = getByText("Adelost");
  const burrataButton = getByText("Burrata");
  const danishFetaButton = getByText("Danish Feta");
  const butterKaseButton = getByText("ButterKase");

  expect(bavariaBluButton).toBeInTheDocument();
  expect(adelostButton).toBeInTheDocument();
  expect(burrataButton).toBeInTheDocument();
  expect(danishFetaButton).toBeInTheDocument();
  expect(butterKaseButton).toBeInTheDocument();
});

test("renders main title correctly", () => {
  const { getByText } = render(<App />);
  expect(getByText("PZ Cheeseria")).toBeInTheDocument();
});

test("renders collaboration title correctly", () => {
  const { getByText } = render(<App />);
  expect(getByText("A Collaboration")).toBeInTheDocument();
});

test("renders instruction text correctly", () => {
  const { getByText } = render(<App />);
  expect(
    getByText(
      "Find out how much and some fun facts about your favourite cheeses!"
    )
  ).toBeInTheDocument();
});

test("displays 'Click on a Cheese to learn more!' text", () => {
  const { getByText } = render(<App />);
  expect(getByText("Click on a Cheese to learn more!")).toBeInTheDocument();
});
