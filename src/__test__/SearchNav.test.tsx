import { render } from "@testing-library/react";
import SearchBar from "../components/navBar/searchbar";
import "@testing-library/jest-dom/extend-expect";

describe("SearchBar component", () => {
  test("renders the search input", () => {
    const { getByPlaceholderText } = render(
      <SearchBar searchText="Search for shoes" />
    );
    const searchInput = getByPlaceholderText("Search for shoes");
    expect(searchInput).toBeInTheDocument();
  });
});
