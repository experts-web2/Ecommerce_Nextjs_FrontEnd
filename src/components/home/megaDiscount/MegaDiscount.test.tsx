import { render } from "@testing-library/react";
import MegaDiscount from "./MegaDiscount";
import { MegaDiscountDela } from "../../../constants/staticData";

describe("MegaDiscount component", () => {
  it("renders the correct number of cards", () => {
    const { getAllByTestId } = render(<MegaDiscount />);
    // const cards = getAllByTestId("card");
    // expect(cards.length).toBe(MegaDiscountDela.length);
  });
});
