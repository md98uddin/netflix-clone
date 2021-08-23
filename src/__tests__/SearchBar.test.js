import { render, screen, fireEvent } from "@testing-library/react";
import NavLargeScreen from "../components/shared/NavLargeScreen";
import { BrowserRouter } from "react-router-dom";

test("should swap class from inactive to active", async () => {
  render(
    <BrowserRouter>
      <NavLargeScreen />
    </BrowserRouter>
  );

  //search should be inactive class
  const element = screen.getAllByTestId("search-bar");
  expect(element[0].classList.contains("inactive")).toBe(true);

  //click the search icon
  fireEvent.click(screen.getByTestId("search-icon"));

  //search should be active class after click
  expect(element[0].classList.contains("active")).toBe(true);
});
